import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Carts } from "../pages";

export const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} end />
      <Route path="/cart" element={<Carts />} />
    </Routes>
  );
};
