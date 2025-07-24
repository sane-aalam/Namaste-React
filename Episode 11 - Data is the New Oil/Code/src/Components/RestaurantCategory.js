import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="md:w-6/12 md:mx-auto md:my-4 bg-gray-50 shadow-lg p-4">
        <div
          onClick={handleItems}
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/54/54785.png"
              width={"30px"}
              height={"10px"}
            />
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
