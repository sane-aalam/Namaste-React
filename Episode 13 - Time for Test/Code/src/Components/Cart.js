import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearItems, removeItems } from "../Utils/cartSlice";

const Cart = () => {
  // read the data
  const cartItems = useSelector((store) => store.cart.items);

  // dispatch(actions)
  const dispatch = useDispatch();

  const handleClearCart = () => {
    // console.log("clear cart!");
    dispatch(clearItems());
  };

  const handleRemoverCart = () => {
    // console.log("removed cart!");
    dispatch(removeItems());
  };

  return (
    <div className="text-center md:m-4 md:p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="md:w-6/12 m-auto">
        <div className="flex justify-end">
          <button
            className="p-2 m-2 bg-red-500 text-white rounded-lg"
            onClick={handleRemoverCart}
          >
            Remove Cart
          </button>
          <button
            className="p-2 m-2 bg-red-500 text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length == 0 && <h1>Cart is empty Add Items to the cart!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
