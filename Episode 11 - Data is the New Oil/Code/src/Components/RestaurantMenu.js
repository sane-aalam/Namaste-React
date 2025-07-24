import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantCategoryHeader from "./RestaurantCategoryHeader";
import SimmerCategoriesEffect from "./SimmerCategoriesEffect";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

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
      <div>
        {FilterCategories.map((category, index) => (
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
