import React, { useState } from "react";
import "./Header.css";
import { LOGO_URL } from "../Utils/CommonFile";

// Using React State Variable
// Const[btnReact,setBtnReact] = usestate();
// Whenever state variable change,React will be re-render all component
// Just refesh all component same,
// - calculate the diff algorithm (privous)

const Header = () => {
  const [LoginToggleButton, setLoginToggleButton] = useState("Sign In");
  console.log("body render");

  const buttonModification = () => {
    if (LoginToggleButton === "Sign In") {
      setLoginToggleButton("Sign Out");
    } else {
      setLoginToggleButton("Sign In");
    }
  };

  return (
    <div className="wrapperHeader">
      <div className="Header">
        <div className="res-logo">
          <img src={LOGO_URL} alt="" />
        </div>
        <div className="navItems">
          <p className="nav-item">Home</p>
          <p className="nav-item">Swiggy Corporate</p>
          <p className="nav-item">Offers</p>
          <p className="nav-item">Help</p>
          <p className="nav-item">Contact Us</p>
          <button className="login-button" onClick={() => buttonModification()}>
            {LoginToggleButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
