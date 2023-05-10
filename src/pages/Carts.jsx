import React from "react";
import { CartItem } from "../components";
import { useCart } from "../context/CartContext";

export const Carts = () => {
  const { total, cartlist } = useCart();
  console.log("total:", total);
  console.log("cartlist:", cartlist);

  return (
    <main className="flex flex-col flex-wrap max-w-7xl m-auto mt-10">
      <h1 className=" text-center text-2xl font-bold">
        {" "}
        Cart Items:{" "}
        <span>
          {cartlist.length}/ {total}$
        </span>
      </h1>
      <div className=" flex flex-col ">
        {cartlist.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
