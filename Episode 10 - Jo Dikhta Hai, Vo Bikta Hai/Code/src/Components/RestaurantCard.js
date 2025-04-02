import React from "react";
import { CDN_URL } from "../Utils/CommonFile";

const RestaurantCard = (props) => {
  // object Destructuring (props manage!)
  const { restaurantData } = props;
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData?.info;

  console.log(deliveryTime);

  return (
    <div className="bg-gray-200 mt-7">
      <div className="rounded-sm">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt=""
          width="250px"
          height="160px"
          className="w-[249px] h-[166px] rounded-sm"
        />
      </div>
      <div className="mt-1 ml-1">
        <h3 className="font-bold py-1 text-lg">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>
        <div className="flex justify-between">
          <div className="flex">
            <span
              className="star-rating-color"
              class="material-icons"
              style={{ background: "green", color: "white" }}
            >
              star
            </span>
            <p className="pl-1">{avgRating}</p>
          </div>
          <p>{costForTwo}</p>
          <p className="pr-1">
            {deliveryTime === undefined ? "30" : deliveryTime} mins
          </p>
        </div>
        <div className="text-sm pt-1">
          <p>
            {cuisines.join(", ").slice(0, 30)}
            {cuisines.join(", ").length > 30 ? "..." : ""}
          </p>
          <p>{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
