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
    <div className="w-[99vw] h-[120px] bg-white">
      <div className="flex justify-between content-center items-center bg-white h-[109px] ml-10 mr-10">
        <div className="w-1xl pl-15">
          <img
            src={LOGO_URL}
            alt=""
            width={"120px"}
            height={"210px"}
            className=""
          />
        </div>
        <div className=" flex justify-between content-center w-4xl items-center mr-15">
          <Link
            to=""
            className="text-[#003d29] text-lg hover:border-b-2 border-b-[#003d29]"
          >
            Home
          </Link>
          <Link className="text-[#003d29] text-lg hover:border-b-2 border-b-[#003d29]">
            Swiggy CorLinkorate
          </Link>
          <Link className="text-[#003d29] text-lg hover:border-b-2 border-b-[#003d29]">Offers</Link>
          <Link
            to="about"
            className="text-[#003d29] text-lg hover:border-b-2 border-b-[#003d29]"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-[#003d29] text-lg hover:border-b-2 border-b-[#003d29]"
          >
            Contact Us
          </Link>
          <button
            className=" bg-green-500 text-white text-lg hover:bg-white hover:text-green-500 hover:border-2 hover:border-green-500 font-bold py-2 px-4 rounded"
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
