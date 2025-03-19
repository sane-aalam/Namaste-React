import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import SimmerEffect from "./SimmerEffect";
import React from "react";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

// *documents
// As you know, we are using clinet-side-routing
// backend -> req.query.parameter used
// here we need to used useParams();

const RestaurantMenu = () => {
  const { resId } = useParams();

  //! custom hook:
  // each component is focused on a specific task
  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo === null) {
    return <SimmerEffect />;
  }

  // object understanding of fetech data
  const { id, name, city, costForTwo, cuisines, avgRating, sla } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const cards =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards =
    cards.find((fullcard) => fullcard?.card?.card?.itemCards)?.card?.card
      ?.itemCards || [];

  return (
    <div className="restaurant-menu">
      <h1 className="restaurant-title">RestaurantMenu: {name}</h1>
      <br />
      <ul>
        <p>id : {id}</p>
        <p>city : {city}</p>
        <p>costforTwo : {costForTwo / 100}</p>
        <p>avgRating : {avgRating}</p>
        <p>deliveryTime : {sla.deliveryTime}</p>
        <p>cuisines : {cuisines.join(", ")}</p>
        <br />
      </ul>
      <h1 className="restaurant-title">Menu: </h1>
      <br />
      <ol>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs/- {item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RestaurantMenu;
