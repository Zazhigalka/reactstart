import React from "react";
import "./Header.css";
import img1 from "../image/IMAGE (1).png";
import img2 from "../image/IMAGE.png";

const Header = () => {
  return (
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
  );
};

export default Header;
