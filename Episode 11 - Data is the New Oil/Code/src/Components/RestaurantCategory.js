import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log("debug1");
  console.log(data);
  return (
    <div>
      <div className="md:w-6/12 md:mx-auto md:my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer">
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <ItemList items={data.itemCards} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
