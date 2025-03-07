import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    console.log("useEffect called!");
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const url =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.87960&lng=78.07620&restaurantId=101574&catalog_qa=undefined&submitAction=ENTER";
    const response = await fetch(url);
    const jsonData = await response.json();
    
  };

  return (
    <div>
      <h1>RestaurantMenu:s detais</h1>
      <ul>
        <li>Biryani</li>
        <li>Coko</li>
        <li>200 rupess</li>
        <li>Location</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
