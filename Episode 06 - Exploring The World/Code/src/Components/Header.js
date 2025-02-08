import React from "react";
import "./Header.css";
import { LOGO_URL } from "../Utils/CommonFile";

const Header = () => {
  return (
    <div className="wrapperHeader">
      <div className="Header">
        <div className="res-logo">
          <img src={LOGO_URL} alt="" />
        </div>
        <div className="navItems">
          <p className="nav-item">Home</p>
          <p className="nav-item">About Swiggy</p>
          <p className="nav-item">Delivering For Everyone</p>
          <p className="nav-item">Newsroom</p>
          <p className="nav-item">Contact Us</p>
          <p className="nav-item">Card</p>
          <p className="nav-item">Sustainability</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
