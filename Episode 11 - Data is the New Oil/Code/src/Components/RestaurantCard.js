import React from "react";
import { CDN_URL } from "../Utils/CommonFile";

const RestaurantCard = (props) => {
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

  console.log(name);

  return (
    <div className="bg-zinc-300 pt-6 pb-6 pl-3 pr-3">
      <div className="rounded-sm ">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt=""
          width="250px"
          height="160px"
          className="w-[279px] h-[176px] rounded-sm"
        />
      </div>
      <div className="mt-1 ml-1 ">
        <h3 className="font-bold py-1 text-lg ">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>
        <div className="flex justify-between pt-2">
          <div className="flex">
            <span
              className="star-rating-color"
              class="material-icons"
              style={{ background: "#5b5c5a", color: "white" }}
            >
              star
            </span>
            <p className="pl-2 ">{avgRating}</p>
          </div>
          <p>{costForTwo}</p>
          <p className="pr-2 text-base ">
            {deliveryTime === undefined ? "30" : deliveryTime} mins
          </p>
        </div>
        <div className="text-base pt-2 ">
          <p>
            {cuisines.join(", ").slice(0, 30)}
            {cuisines.join(", ").length > 30 ? "..." : ""}
          </p>
          <p className="text-base pt-2">{areaName}</p>
        </div>
      </div>
    </div>
  );
};

//Higher Order Component
// Which take Component as input,
// Which return inhanced Component as output

//input - RestaurantCard return Output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-zinc-700 text-white px-3 py-1 rounded-lg z-10 border border-black">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
