import React from "react";
import EcouteurY from "../assets/1001.png";
import EcouteurG from "../assets/1002.png";
import EcouteurH from "../assets/1003.png";
import EcouteurP from "../assets/1004.png";
import EcouteurR from "../assets/1005.png";
import EcouteurB from "../assets/1006.png";
import { Card } from "../components";
export const Home = () => {
  const products = [
    { id: 345, title: "Bootleg Sony Yellow", price: 106, img: EcouteurY },
    { id: 309, title: "Bootleg Sony Gold", price: 389, img: EcouteurG },
    {
      id: 234,
      title: "Bootleg Sony Headphone",
      price: 106,
      img: EcouteurH,
    },
    { id: 784, title: "Bootleg Sony Pink", price: 106, img: EcouteurP },
    { id: 449, title: "Bootleg Sony Red", price: 106, img: EcouteurR },
    { id: 894, title: "Bootleg Sony Black", price: 106, img: EcouteurB },
  ];
  return (
    <main className="flex justify-around flex-wrap max-w-7xl m-auto mt-14">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </main>
  );
};
