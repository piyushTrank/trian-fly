const express = require("express");
const flightController = require("../controllers/flightController");

const router = express.Router();

router.route("/").get(flightController.flightTesting);

router.route("/search-airport").post(flightController.searchAirport);

router.route("/flight-offer").post(flightController.flightOffers);
router.route("/flight-pricing").post(flightController.flightOffersPricing);

module.exports = router;
