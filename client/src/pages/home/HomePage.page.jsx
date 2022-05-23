import React from "react";
import FlightSearchForm from "../../components/flight-search-form/FlightSearchForm.component";
import Layout from "../../containers/layout/Layout.container";

import "./Homepage.styles.css";

import airline1 from "../../assets/images/flight/pngwing.com (67).jpg";
import airline2 from "../../assets/images/flight/pngwing.com (71).jpg";
import airline3 from "../../assets/images/flight/pngwing.com (68).jpg";
import airline4 from "../../assets/images/flight/pngwing.com (70).jpg";
import airline5 from "../../assets/images/flight/pngwing.com (63).jpg";
import airline6 from "../../assets/images/flight/pngwing.com (69).jpg";
import airline7 from "../../assets/images/flight/pngwing.com (64).jpg";
import airline8 from "../../assets/images/flight/pngwing.com (72).jpg";

import london from "../../assets/images/flight/london.jpg";
import toronto from "../../assets/images/flight/toronto.jpg";
import niagra from "../../assets/images/flight/niagra.jpg";
import sol from "../../assets/images/flight/sol.jpg";
import uk from "../../assets/images/flight/uk.jpg";
import new_york from "../../assets/images/flight/new york.jpg";

const HomePage = () => {
  const goToTop = () => window.scrollTo(0, 0);

  return (
    <div className="cm-homepage-container">
      <div className="cm-homepage-banner-container cm-bg-prop cm-pos-relative">
        <div className="cm-page-center">
          <h1 className="cm-white-col">
            Plan your travel at <br />
            the lowest air fare
          </h1>
          <p className="cm-white-col">
            Easily compare and book your next flight
          </p>
          <FlightSearchForm />
        </div>
      </div>
      <div className="cm-section cm-home-trav-container">
        <div className="cm-page-center cm-flex-type-2">
          <div className="cm-left-col cm-wd-50 cm-lr-pad">
            <h2 className="cm-section-h">Travel that moves you</h2>
            <p className="cm-section-sp">
              More than 10 trusted travel partners accross flights and airport
              transfers, so that you can focus on the journey.
            </p>
            <p>
              <span className="cm-btn cm-sec-bg2 cm-wt-600 cm-white-col">
                Book Now
              </span>
            </p>
          </div>
          <div className="cm-right-col cm-wd-50 cm-flex-type-2 cm-flex-wrap cm-txt-center">
            <div className="cm-trav-img-item cm-wd-33">
              <img src={airline1} alt="Delta" />
            </div>
            <div className="cm-trav-img-item cm-wd-33">
              <img src={airline2} alt="American Airlines" />
            </div>
            <div className="cm-trav-img-item cm-wd-33">
              <img src={airline3} alt="Alaska Airlines" />
            </div>
            <div className="cm-trav-img-item cm-wd-50">
              <img src={airline4} alt="United Airlines" />
            </div>
            <div className="cm-trav-img-item cm-wd-50">
              <img src={airline5} alt="Lufthansa" />
            </div>
            <div className="cm-trav-img-item cm-wd-33">
              <img src={airline6} alt="Fly Emirates" />
            </div>
            <div className="cm-trav-img-item cm-wd-33">
              <img src={airline7} alt="Etihad Airways" />
            </div>
            <div className="cm-trav-img-item cm-wd-33">
              <img src={airline8} alt="Southwest" />
            </div>
          </div>
        </div>
      </div>

      <div className="cm-section cm-home-feat-container">
        <div className="cm-page-center cm-flex-type-2">
          <div className="cm-home-feat-item">
            <div className="cm-feat-header cm-flex">
              <i className="fa-solid fa-tag"></i>
              <p>Lowest Prices</p>
            </div>
            <p>
              We partner with the top flight carriers to bring you the best
              deals.
            </p>
          </div>

          <div className="cm-home-feat-item">
            <div className="cm-feat-header cm-flex">
              <i className="fa-solid fa-circle-check"></i>
              <p>No Hidden Fees</p>
            </div>
            <p>Without any extra fees, we make it easy to book your tickets</p>
          </div>
          <div className="cm-home-feat-item">
            <div className="cm-feat-header cm-flex">
              <i className="fa-solid fa-heart"></i>
              <p>Best Flights Options</p>
            </div>
            <p>We help you find & compare the best flights in one place.</p>
          </div>
          <div className="cm-home-feat-item">
            <div className="cm-feat-header cm-flex">
              <i className="fa-solid fa-clock"></i>
              <p>Instant Booking</p>
            </div>
            <p>For selected sellers, book with just a couple of clicks.</p>
          </div>
        </div>
      </div>

      <div className="cm-section cm-exp-container">
        <div className="cm-page-center">
          <h2 className="cm-section- cm-txt-center">
            Explore Best Destinations
          </h2>
          <div className="cm-section-spacing cm-exp-wrapper cm-flex-type-2 cm-flex-wrap">
            <div
              className="cm-exp-item cm-bg-prop box-shadow-2 cm-pointer"
              onClick={goToTop}
              style={{ backgroundImage: `url('${london}')` }}
            >
              <div className="cm-content cm-sec-bg cm-white-col cm-txt-center">
                <h4>Explore London</h4>
              </div>
            </div>
            <div
              className="cm-exp-item cm-bg-prop box-shadow-2 cm-pointer"
              onClick={goToTop}
              style={{ backgroundImage: `url('${toronto}')` }}
            >
              <div className="cm-content cm-sec-bg cm-white-col cm-txt-center">
                <h4>Explore Toronto</h4>
              </div>
            </div>
            <div
              className="cm-exp-item cm-bg-prop box-shadow-2 cm-pointer"
              onClick={goToTop}
              style={{ backgroundImage: `url('${niagra}')` }}
            >
              <div className="cm-content cm-sec-bg cm-white-col cm-txt-center">
                <h4>Explore Niagra Falls</h4>
              </div>
            </div>
            <div
              className="cm-exp-item cm-bg-prop box-shadow-2 cm-pointer"
              onClick={goToTop}
              style={{ backgroundImage: `url('${sol}')` }}
            >
              <div className="cm-content cm-sec-bg cm-white-col cm-txt-center">
                <h4>Explore Statue of Liberty</h4>
              </div>
            </div>
            <div
              className="cm-exp-item cm-bg-prop box-shadow-2 cm-pointer"
              onClick={goToTop}
              style={{ backgroundImage: `url('${uk}')` }}
            >
              <div className="cm-content cm-sec-bg cm-white-col cm-txt-center">
                <h4>Explore Big Ben</h4>
              </div>
            </div>
            <div
              className="cm-exp-item cm-bg-prop box-shadow-2 cm-pointer"
              onClick={goToTop}
              style={{ backgroundImage: `url('${new_york}')` }}
            >
              <div className="cm-content cm-sec-bg cm-white-col cm-txt-center">
                <h4>Explore New York</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
