import React, { useState } from "react";
import "./Header.css";
import { LOGO_URL } from "../Utils/CommonFile";

// Using React State Variable
// Const[btnReact,setBtnReact] = usestate();
// Whenever state variable change,React will be re-render all component
// Just refesh all component same,
// - calculate the diff algorithm (privous)

const Header = () => {
  const [LoginToggleButton, setLoginToggleButton] = useState("Login");
  function ReactNameModification() {
    setLoginToggleButton("LogOut");
  }

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
          <button onClick={() => ReactNameModification()}>
            {LoginToggleButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
