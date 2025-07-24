import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/CommonFile";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [LoginToggleButton, setLoginToggleButton] = useState("Login");
  console.log("body render");

  useEffect(() => {
    console.log("useEffect is called!");
  }, [LoginToggleButton]);

  const buttonModification = () => {
    return LoginToggleButton == "Login"
      ? setLoginToggleButton("Logout")
      : setLoginToggleButton("Login");
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="w-[99vw] h-[110px] bg-white">
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
        <div className="flex justify-between content-center w-2xl items-center mr-15">
          <Link
            to=""
            className="text-zinc-900 text-sm md:text-base lg:text-lg hover:border-b-2 border-zinc-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-zinc-900 text-sm md:text-base lg:text-lg hover:border-b-2 border-zinc-700"
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            className="text-zinc-900 text-sm md:text-base lg:text-lg hover:border-b-2 border-zinc-700"
          >
            Contact Us
          </Link>
          <Link className="text-zinc-900 text-sm md:text-base lg:text-lg hover:border-b-2 border-zinc-700">
            Grocery
          </Link>
          <p className="text-zinc-600">
            {onlineStatus ? "🟢 online" : "🔴 offline"}
          </p>
          <button
            className=" bg-zinc-800 text-white text-sm md:text-base lg:text-lg hover:bg-white hover:border-2 
             hover:border-zinc-700 hover:text-zinc-700 dark:bg-zinc-700 font-bold py-2 px-4 rounded"
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
