import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/CommonFile";
import { Link } from "react-router-dom";

const Header = () => {
  const [LoginToggleButton, setLoginToggleButton] = useState("Login");
  console.log("body render");

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
    <div className="w-[99vw] h-[110px] border-b-2">
      <div className="flex justify-between content-center items-center bg-white-400 h-[109px]">
        <div className="w-1xl pl-15">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo.png"
            alt=""
            width={"100px"}
            height={"200px"}
            className=""
          />
        </div>
        <div className=" flex justify-between content-center w-4xl items-center mr-15">
          <Link
            to=""
            className="text-[#003d29] hover:border-b-2 border-b-[#003d29]"
          >
            Home
          </Link>
          <Link className="text-[#003d29] hover:border-b-2 border-b-[#003d29]">
            Swiggy CorLinkorate
          </Link>
          <Link className="text-[#003d29]">Offers</Link>
          <Link
            to="about"
            className="text-[#003d29] hover:border-b-2 border-b-[#003d29]"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-[#003d29] hover:border-b-2 border-b-[#003d29]"
          >
            Contact Us
          </Link>
          <button
            className=" bg-blue-500 text-white hover:bg-[#003d29] font-bold py-2 px-4 rounded"
            onClick={() => buttonModification()}
          >
            {LoginToggleButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
