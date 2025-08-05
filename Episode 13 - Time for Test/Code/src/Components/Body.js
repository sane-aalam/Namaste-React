import React, { useEffect } from "react";
import { useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import SimmerEffect from "./SimmerEffect";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredResaurantList, setFilteredResaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // withPromotedLevel take <resturantCard> Component as input return with level
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchSwiggyRealTimeData();
  }, []);

  async function fetchSwiggyRealTimeData() {
    const response = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Fis-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING%26lat=28.7040592%26lng=77.1024901"
    );
    const jsonData = await response.json();

    setRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredResaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    const consoleData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(consoleData);
  }

  if (restaurants.length == 0) {
    return <SimmerEffect />;
  } else
    return (
      <div className="mr-5 ml-5 mt-10">
        <div className="flex justify-end flex-col md:flex-row md:item gap-5 items-center m-4 ml-20 mr-20 ">
          <div className="">
            <input
              type="text"
              name=""
              className="border-2 border-zinc-800 py-2 px-3 ml-5 mr-5 text-1x font-semibold"
              placeholder="Search for a restaurant..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="text-white bg-zinc-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              onClick={() => {
                const SearchfilterResaurant = restaurants.filter((res) => {
                  // convert into lowercase - case insensitive search
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilteredResaurantList(SearchfilterResaurant);
              }}
            >
              Search Restaurants
            </button>
          </div>
          <div>
            <button
              className="flex justify-center items-center text-white bg-zinc-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-zinc-800 dark:hover:bg-zinc-700 "
              onClick={() => {
                const restaurantFilterData = filteredResaurantList.filter(
                  (res) => {
                    return res.info.avgRating >= 4.4;
                  }
                );
                setFilteredResaurantList(restaurantFilterData);
              }}
            >
              Best Restaurants(Top Ratings)
            </button>
          </div>
          <div>
            <button
              className="flex justify-center items-center text-white bg-zinc-800 hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-zinc-800 dark:hover:bg-zinc-700 "
              onClick={() => {
                const restaurantFilterData = filteredResaurantList.filter(
                  (res) => {
                    return res.info.areaName === "Rohini";
                  }
                );
                setFilteredResaurantList(restaurantFilterData);
              }}
            >
              Promoted Restaurants
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 py-10 ml-20 mr-20">
          {filteredResaurantList.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              {restaurant.info.areaName === "Rohini" ? (
                <RestaurantCardPromoted restaurantData={restaurant} />
              ) : (
                <RestaurantCard restaurantData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Body;
