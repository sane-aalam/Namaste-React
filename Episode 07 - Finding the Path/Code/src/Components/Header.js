import React, { useEffect, useState } from "react";
import "./Header.css";
import { LOGO_URL } from "../Utils/CommonFile";

// Using React State Variable
// Const[btnReact,setBtnReact] = usestate();
// Whenever state variable change,React will be re-render all component
// Just refesh all component same,
// - calculate the diff algorithm (privous)

const Header = () => {
  const [LoginToggleButton, setLoginToggleButton] = useState("Login");
  console.log("body render");

  //* useEffect(depthency array understanding full)
  // useEffect Hook is used to perform side effects in functional components
  // case-1 useEffect called every render cycle
  // case-2 useEffect called [] only once
  // case-3 useEffect called [LoginToggleButton] only when LoginToggleButton changes
  // - according to Depency array value, useEffect called

  useEffect(() => {
    console.log("useEffect is called!");
  }, [LoginToggleButton]);

  const buttonModification = () => {
    if (LoginToggleButton === "Login") {
      setLoginToggleButton("Logout");
    } else {
      setLoginToggleButton("Login");
    }
  };

  return (
    <div className="wrapperHeader">
      <div className="Header">
        <div className="res-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRnwHX3pDRe8GY2BPO59k-54CcbnU46H-v9w&s"
            alt=""
          />
        </div>
        <div className="navItems">
          <p className="nav-item">Home</p>
          <p className="nav-item">Swiggy Corporate</p>
          <p className="nav-item">Offers</p>
          <p className="nav-item">About</p>
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
