import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
  const handleItems = () => {
    setShowIndex(!showIndex);
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
        {showIndex && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
