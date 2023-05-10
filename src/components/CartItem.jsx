import React from "react";
import "./CartItems.css";
import { useCart } from "../context/CartContext";

export const CartItem = ({ product }) => {
  const { removeFromCart } = useCart();
  const { img, title, price } = product;
  return (
    <div className=" border-gray-200 rounded-lg shadow mt-4 p-2">
      <div className=" flex justify-between text-center items-center h-20">
        <img className=" w-28" src={img} alt="ecouteur" />
        <div className=" max-w-[150px] font-semibold">{title}</div>
        <div>{price}$</div>
        <button
          onClick={() => removeFromCart(product)}
          className=" text-white bg-red-800 p-2 rounded-lg"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
