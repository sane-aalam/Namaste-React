import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/CommonFile";
import { addItems } from "../Utils/cartSlice";

const ItemList = ({ items }) => {
  // logic of reduxtoolkits
  // dispatch has action(according to use) - [addItems,clearItems,removedItems]
  const dispatch = useDispatch();
  const addToCardItemsHandler = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          data-testid="foodItems"
          key={item.cartId || `${item.card.info.id}-${index}`}
          className="md:p-2 md:m-2 py-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 px-2">
            <div className="py-2  md:text-lg font-semibold">
              <span>{item.card.info.name}</span>
              <span>
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 px-2">
            <div className="flex justify-center">
              <button
                className="absolute p-1 md:p-2 bg-black text-white rounded-lg shadow-lg"
                onClick={() => addToCardItemsHandler(item)}
              >
                Add +
              </button>
            </div>
            {
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-20 md:h-auto"
              />
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
