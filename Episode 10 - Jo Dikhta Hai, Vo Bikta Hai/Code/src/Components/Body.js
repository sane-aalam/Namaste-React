import React, { useEffect } from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SimmerEffect from "./SimmerEffect";
import React from "react";

// You have to maintain the state of the filtered data, so that the data is not lost when the user searches for a restaurant or filters the data
// concepts(copy data only changed not original data is changed!)
// call by value
// call by reference

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredResaurantList, setFilteredResaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect() is a hook that takes a function and an array of dependencies as arguments.
  // It calls the function whenever one of the dependencies changes.
  useEffect(() => {
    fetchSwiggyRealTimeData();
  }, []);

  // The fetch() function in JavaScript initiates a network request and returns a Promise.
  // This Promise resolves to a Response object if the request is successful.
  async function fetchSwiggyRealTimeData() {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.87960&lng=78.07620&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(url);
    const jsonData = await response.json();

    console.log(jsonData);

    // officall channing in javascript
    setRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    // call by value
    setFilteredResaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    // We don’t have any services here till now. Try changing location.
    // Soon it will work
    console.log(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  if (restaurants.length == 0) {
    return <SimmerEffect />;
  } else
    return (
      <div>
        <div className="flex m-4 ml-20">
          <div className="">
            <input
              type="text"
              name=""
              className="border-2 py-2 px-1 text-1xl"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="border-1 border-gray-400 bg-gray-200 font-lg py-2 px-1"
              onClick={() => {
                const SearchfilterResaurant = restaurants.filter((res) => {
                  // convert into lowercase - case insensitive search
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                console.log(SearchfilterResaurant);
                setFilteredResaurantList(SearchfilterResaurant);
              }}
            >
              Search Restaurants
            </button>
          </div>
          <div>
            <button
              className="border-1 border-gray-400 bg-gray-200 font-lg py-2 px-1 ml-5"
              onClick={() => {
                const restaurantFilterData = filteredResaurantList.filter(
                  (res) => {
                    return res.info.avgRating >= 4.7;
                  }
                );
                setFilteredResaurantList(restaurantFilterData);
              }}
            >
              Best Restaurants in Agra - Top Ratings
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-5 py-4 ml-20 mr-10">
          {filteredResaurantList.map((restaurant) => (
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
