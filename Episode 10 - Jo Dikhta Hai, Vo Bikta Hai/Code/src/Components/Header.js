import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/CommonFile";
import { Link } from "react-router-dom";

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
            src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo.png"
            alt=""
            width={"100px"}
            height={"200px"}
            className="border-1"
          />
        </div>
        <div className="navItems">
          <Link to="" className="nav-item">
            Home
          </Link>
          <Link className="nav-item">Swiggy CorLinkorate</Link>
          <Link className="nav-item">Offers</Link>
          <Link to="about" className="nav-item">
            About
          </Link>
          <Link to="/contact" className="nav-item">
            Contact Us
          </Link>
          <button className="login-button" onClick={() => buttonModification()}>
            {LoginToggleButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
