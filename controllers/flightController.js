const Amadeus = require("amadeus");
const nodemailer = require("nodemailer");
const {
  exchangeMail,
  cancelRefundMail,
  newBookingMail,
  futureCreditMail,
} = require("../utils/mailTemplates");

const amadeus = new Amadeus({
  clientId: process.env.API_KEY,
  clientSecret: process.env.API_SECRET,
  hostname: "production",
});

exports.flightTesting = async (req, res) => {
  const flightData = await amadeus.shopping.flightDestinations.get({
    origin: "MAD",
  });

  console.log("Res", flightData);
  res.status(200).json({
    status: "success",
    data: flightData.data,
  });
};

exports.searchAirport = async (req, res) => {
  try {
    const searchTerm = req.body.searchTerm;

    console.log("searchTerm", searchTerm);

    const searchData = await amadeus.referenceData.locations.get({
      keyword: searchTerm,
      subType: "CITY,AIRPORT",
    });

    res.status(200).json({
      status: "success",
      data: searchData.data,
    });
  } catch (error) {
    console.log("error", error);
  }
};

exports.flightOffers = async (req, res) => {
  try {
    console.log(req.body);

    let departure = req.body.departure;
    let arrival = req.body.arrival;
    let locationDeparture = req.body.locationDeparture;
    let locationArrival = req.body.locationArrival;
    let tripType = req.body.tripType;
    let flightClass = req.body.flightClass;
    let travellers = req.body.travellers;
    let carriersFilter = req.body.filters.carrierFilter;
    let stopsFilter = req.body.filters.stopsFilter;

    let carriersFilterObj = !!carriersFilter
      ? carriersFilter.length > 0
        ? {
            includedCarrierCodes: carriersFilter.split(","),
          }
        : {}
      : {};

    let stopsFilterObj = !!stopsFilter
      ? {
          maxNumberOfConnections: stopsFilter,
        }
      : {};

    const genOriginDestinationsArr = () => {
      const originDestinationsArr = [
        {
          id: "1",
          originLocationCode: locationDeparture,
          destinationLocationCode: locationArrival,
          departureDateTimeRange: {
            date: departure,
            //   time: "10:00:00",
          },
        },
      ];
      if (tripType === "round-trip") {
        originDestinationsArr.push({
          id: "2",
          originLocationCode: locationArrival,
          destinationLocationCode: locationDeparture,
          departureDateTimeRange: {
            date: arrival,
            //   time: "17:00:00",
          },
        });
      }

      return originDestinationsArr;
    };

    const offerData = await amadeus.shopping.flightOffersSearch.post(
      JSON.stringify({
        currencyCode: "USD",
        originDestinations: genOriginDestinationsArr(),
        travelers: travellers,
        sources: ["GDS"],
        // oneWay: true,
        searchCriteria: {
          maxFlightOffers: 10,
          flightFilters: {
            carrierRestrictions: carriersFilterObj,
            cabinRestrictions: [
              {
                cabin: flightClass,
                coverage: "MOST_SEGMENTS",
                originDestinationIds: ["1"],
              },
            ],
            connectionRestriction: stopsFilterObj,
          },
        },
      })
    );

    console.log(offerData);

    res.status(200).json({
      status: "success",
      data: offerData.result,
    });
  } catch (error) {
    console.log("err", error);
  }
};

exports.flightOffersPricing = async (req, res) => {
  try {
    console.log(req.body.flData);

    let flData = req.body.flData;

    const offerDataPricing = await amadeus.shopping.flightOffers.pricing.post(
      JSON.stringify({
        data: {
          type: "flight-offers-pricing",
          flightOffers: [flData],
        },
      })
    );

    console.log("OfferDataPricing", offerDataPricing.result);

    res.status(200).json({
      status: "success",
      data: offerDataPricing.result,
    });
  } catch (error) {
    console.log("err", error);
  }
};

exports.sendMail = async (req, res) => {
  try {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secureConnection: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailTempFn = "Invalid Data";

    if (req.body.bookingType === "exchange") {
      mailTempFn = exchangeMail(req.body.data);
    }

    if (req.body.bookingType === "cancelRefund") {
      mailTempFn = cancelRefundMail(req.body.data);
    }

    if (req.body.bookingType === "newBooking") {
      mailTempFn = newBookingMail(req.body.data);
    }

    if (req.body.bookingType === "futureCredit") {
      mailTempFn = futureCreditMail(req.body.data);
    }

    if (req.body.receiverEmail === "" || req.body.emailSubject === "") {
      res.status(200).json({
        status: "error",
        message: "Receiver Email & Email Subject cannot be empty.",
      });
    }

    let mailOptions = {
      from: "info@trianfly.com",
      to: !!req.body.receiverEmail
        ? req.body.receiverEmail
        : "piyush@tranktechies.com",
      subject: req.body.emailSubject,
      html: mailTempFn,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log("Email err", err);
        res.status(200).json({
          status: "success",
          message: "Mail not Sent.",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Mail Sent.",
        });
      }
    });
  } catch (error) {
    console.log("err", error);
  }
};

exports.sendTestMail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      // host: process.env.SMTP_HOST,
      host: "us2.smtp.mailhostbox.com",
      port: process.env.SMTP_PORT,
      secureConnection: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailOptions = {
      from: "info@trianfly.com",
      to: "piyush@tranktechies.com",
      subject: "Testing subject",
      html: `<h1>Hey There!!</h1>`,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log("Email err", err);
        res.status(200).json({
          status: "error",
          message: "Mail not Sent.",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Mail Sent.",
        });
      }
    });
  } catch (error) {
    console.log("err", error);
  }
};
