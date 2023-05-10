import React, { useState } from "react";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

export const Card = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const { id, img, title, price } = product;
  const { addToCart, cartlist, removeFromCart } = useCart();
  useEffect(() => {
    const productIsInCart = cartlist.find((cartItem) => cartItem.id === id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartlist, id]);
  return (
    <div className="flex-col max-w-sm border border-gray-200 rounded-lg shadow mb-5">
      <img className=" w-96 h-64" src={img} alt="" />
      <div className=" p-2">
        <p className=" text-md font-semibold p-2">{title}</p>
        <div className=" flex flex-row justify-between mt-1 ">
          <p className="font-semibold p-2 ">${price}</p>

          {isInCart ? (
            <button
              onClick={() => removeFromCart(product)}
              className="text-white p-2 rounded  bg-red-700"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="text-white p-2 rounded  bg-blue-700"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
