import React, { useEffect } from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SimmerEffect from "./SimmerEffect";

// concepts(copy data only changed not original data is changed!)
// call by value
// call by reference

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchSwiggyRealTimeData();
  }, []);

  // The fetch() function in JavaScript initiates a network request and returns a Promise.
  // This Promise resolves to a Response object if the request is successful.
  async function fetchSwiggyRealTimeData() {
    const url =
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(url);
    const jsonData = await response.json();

    // officall channing in javascript
    setRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  if (restaurants.length == 0) {
    return <SimmerEffect />;
  } else
    return (
      <div className="main-body">
        <div className="top-rating-button">
          <button
            onClick={() => {
              const restaurantFilterData = restaurants.filter((res) => {
                return res.info.avgRating > 4.5;
              });
              console.log(restaurantFilterData);
              setRestaurants(restaurantFilterData);
            }}
          >
            Best Restaurants in Agra - Top Ratings
          </button>
        </div>
        <div className="res-list">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          ))}
        </div>
      </div>
    );
};

export default Body;
