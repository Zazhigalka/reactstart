import React from "react";
import "./Example.css";
import logo from "../image/Frame.png";
import img1 from "../image/IMAGE (1).png";
import img2 from "../image/IMAGE.png";

import m1 from "../image/m1.png";
import m2 from "../image/m2.png";
import m3 from "../image/m3.png";
import m4 from "../image/m4.png";
import m5 from "../image/m5.png";
import m6 from "../image/m6.png";

const Example = (props) => {
  console.log(props);
  return (
    <div>
      <div className="container">
        <navbar className="navbar">
          <img src={logo} alt="" className="navbar__logo" />
          <ul className="navbar__list">
            <li className="navbar__list_item">Grow your career</li>
            <li className="navbar__list_item">Build a team</li>
            <li className="navbar__list_item">Meet the founders</li>
            <li className="navbar__list_item">Mentorship</li>
            <li className="navbar__list_item">Say hello</li>
          </ul>
        </navbar>
      </div>

      <header className="header">
        <div className="container">
          <h1 className="header__title">
            Discover, <br /> nurture, bloom
          </h1>
          <p className="header__p">
            Product & Engineering Recruitment <br /> va va bloom , with a human
            touch and a dash of
          </p>
        </div>
        <img className="img1" src={img1} alt="" />
        <img className="img2" src={img2} alt="" />
      </header>

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
    </div>
  );
};

export default Example;
