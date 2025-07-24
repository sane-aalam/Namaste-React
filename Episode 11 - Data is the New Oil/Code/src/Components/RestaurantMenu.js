import { useParams } from "react-router-dom";
import SimmerEffect from "./SimmerEffect";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

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

  // filter all categories
  const FilterCategories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(FilterCategories);

  return (
    <div className="border-1 text-center">
      <span className="text-3xl mt-10">
        {name} {city} {costForTwo / 100}
      </span>
      <div>
        {FilterCategories.map((category, index) => (
          //Controlled Component
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
