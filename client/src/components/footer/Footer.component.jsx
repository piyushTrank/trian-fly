import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/flight/trian_fly_logo.png";
import { phoneNum } from "../../utils/globalVars";

import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer className="cm-footer-container">
      <div className="cm-footer-top">
        <div className="cm-page-center cm-flex-type-2 cm-flex-align-fs">
          <div className="cm-footer-col cm-wd-50 cm-lr-pad cm-footer-col1">
            <img className="cm-footer-logo" src={logo} alt="Trian Fly" />
            <p>
              Trian Fly is established to streamline the online flight booking
              experience and touch base with our customers' requirements. You
              can find great deals on flight tickets and plan a budget-efficient
              trip with our one-stop flight booking platform. Customer
              satisfaction is the center of our goals, and we ensure to align
              with your travel needs.
            </p>
          </div>
          <div className="cm-footer-col cm-wd-25 cm-lr-pad cm-footer-col2">
            <h3>Explore Top Destinations</h3>
            <ul className="cm-menu-ul">
              <li>Explore London</li>
              <li>Explore Toronto</li>
              <li>Explore Niagra Falls</li>
              <li>Explore Statue of Liberty</li>
              <li>Explore Big Ben</li>
              <li>Explore New York</li>
            </ul>
          </div>
          <div className="cm-footer-col cm-wd-25 cm-lr-pad cm-footer-col3">
            <h3>Reach us at</h3>
            <ul className="cm-menu-ul">
              <li>
                <a href={`tel:${phoneNum.value}`}>
                  <i className="fa-solid fa-phone"></i>
                  <span>{phoneNum.label}</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@trianfly.com">
                  <i className="fa-solid fa-envelope"></i>
                  <span>info@trianfly.com</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-location-dot"></i>
                  <address>47 Eliot Street, NATICK, MA, USA 01760,</address>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cm-footer-bottom cm-sec-bg cm-white-col">
        <div className="cm-page-center cm-txt-center">
          <p>© 2022. All rights reserved.</p>
          <p className="cm-flex-type-2">
            <Link to="/">Privacy Policy</Link> |
            <Link to="/">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
