import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/CommonFile";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  useEffect(() => {
    console.log("useEffect is called!");
  }, [isLoggedIn]);

  const buttonModification = () => {
    return isLoggedIn == "Login"
      ? setIsLoggedIn("Logout")
      : setIsLoggedIn("Login");
  };

  const onlineStatus = useOnlineStatus();

  // understand the state redux-toolkit
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
            to="/contact"
            className="text-zinc-900 text-sm md:text-base lg:text-lg hover:border-b-2 border-zinc-700"
          >
            Contact Us
          </Link>
          <Link className="text-zinc-900 text-sm md:text-base lg:text-lg hover:border-b-2 border-zinc-700">
            Grocery
          </Link>
          <p>(2)Items</p>
          <p className="text-zinc-800 text-sm md:text-base lg:text-lg hover:border-b-2 border-zinc-700">
            {onlineStatus ? "🟢 online" : "🔴 offline"}
          </p>

          <button
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            onClick={() => buttonModification()}
          >
            {isLoggedIn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
