import React from "react";
import "./Navbar.css";
import logo from "../image/Frame.png";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
