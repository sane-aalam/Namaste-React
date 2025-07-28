import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantCategoryHeader from "./RestaurantCategoryHeader";
import SimmerCategoriesEffect from "./SimmerCategoriesEffect";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // data fetching or state maddnagement
  const restaurantInfo = useRestaurantMenu(resId);

  // showCard or not show card
  const [showIndex, setShowIndex] = useState(0);

  if (restaurantInfo === null) {
    return <SimmerCategoriesEffect />;
  }

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

  // console.log("filterCategories", FilterCategories);

  const topbarData = restaurantInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="text-center my-10">
      <div>
        <RestaurantCategoryHeader data={topbarData} key={topbarData.id} />
      </div>
      {/* Controlled Component */}
      <div>
        {FilterCategories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showIndex={index == showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex((prevIndex) => (prevIndex === index ? null : index))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
