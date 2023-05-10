import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const { cartlist } = useCart();
  return (
    <header className="max-w-7xl flex h-20 justify-between border-b border-gray-500 m-auto py-5">
      <div className="flex">
        <img className=" w-8 h-8" src={Logo} alt="logo" />
        <h1 className=" ml-2 text-xl font-semibold">Shopping Cart</h1>
      </div>
      <nav className="flex">
        <ul className="flex gap-8 text-xl font-semibold">
          <Link to={"/"}>
            <li className=" hover:bg-slate-200">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li className=" hover:bg-slate-200">Cart</li>
          </Link>
        </ul>
      </nav>
      <div className="flex mr-4 text-xl font-semibold">
        <p>Cart:</p>
        <span>{cartlist.length}</span>
      </div>
    </header>
  );
};
