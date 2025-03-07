import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import SimmerEffect from "./SimmerEffect";
import React from "react";
import { MENU_URL } from "../Utils/CommonFile";

// *documents
// As you know, we are using clinet-side-routing
// backend -> req.query.parameter used
// here we need to used useParams();

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  const fetchMenusData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json?.data);
  };

  useEffect(() => {
    fetchMenusData();
  }, [resId]);

  if (restaurantInfo === null) {
    return <SimmerEffect />;
  }

  const { id, name, city, costForTwo, cuisines, avgRating, sla } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const cards =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards =
    cards.find((fullcard) => fullcard?.card?.card?.itemCards)?.card?.card
      ?.itemCards || [];
  console.log(itemCards);

  return (
    <div className="restaurant-menu">
      <h1>RestaurantMenu: {name}</h1>
      <br />
      <ul>
        <p>id : {id}</p>
        <p>city : {city}</p>
        <p>costforTwo : {costForTwo / 100}</p>
        <p>avgRating : {avgRating}</p>
        <p>deliveryTime : {sla.deliveryTime}</p>
        <p>cuisines : {cuisines}</p>
        <br />
      </ul>
      <h1>Menu :: </h1>
      <br />
      <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs/- {item.card.info.defaultPrice / 100}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
