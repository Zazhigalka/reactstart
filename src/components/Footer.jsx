import React from "react";
import "./Footer.css";

import m1 from "../image/m1.png";
import m2 from "../image/m2.png";
import m3 from "../image/m3.png";
import m4 from "../image/m4.png";
import m5 from "../image/m5.png";
import m6 from "../image/m6.png";

import glogo from "../image/Google icon.png";
import stars from "../image/stars.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="messenger">
          <img className="m1" src={m1} alt="" />
          <img className="m2" src={m2} alt="" />
          <img className="m3" src={m3} alt="" />
          <img className="m4" src={m4} alt="" />
          <img className="m5" src={m5} alt="" />
          <img className="m6" src={m6} alt="" />
        </div>
      </div>
      <div className="footer__v2">
        <div className="container">
          <div className="footer__v2_block">
            <div className="footer__google">
              <img className="footer__google_icon" src={glogo} alt="" />
              <div className="footer__google_r">
                <ul>
                  <li className="footer__google_r_li1">
                    5.0 <img src={stars} alt="" />
                  </li>
                  <li className="footer__google_r_li2">Based on 106 reviews</li>
                </ul>
              </div>
            </div>
            <ul className="footer__center">
              <li>Grow your career</li>
              <li>Build a team</li>
            </ul>

            <ul className="footer__right">
              <li>Meet the founders</li>
              <li>Mentorship</li>
              <li>Say hello</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
