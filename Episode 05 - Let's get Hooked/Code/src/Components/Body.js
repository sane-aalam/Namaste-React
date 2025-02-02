import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Utils/MockData";

// restaurantList is not defined
// we have to import the mockData which have created into Utils file

const Body = () => {
  return (
    <div className="res-list">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
      ))}
    </div>
  );
};

export default Body;
