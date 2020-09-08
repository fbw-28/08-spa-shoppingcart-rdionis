import React, { useContext } from "react";
import Context from "../context/Context";

const ShoppingCart = () => {
  const iPadMiniCost = 500.01;
  const tshirtCost = 10.99;
  const charliCost = 19.99;

  return (
    <div className="shopping-cart">
      <ul>
        <li>iPad 4 Mini | ${iPadMiniCost}</li>
        <button>Add to Cart</button>
        <li>H&M T-Shirt White | ${tshirtCost}</li>
        <button>Add to Cart</button>
        <li>Charli XCX - Sucker CD | {charliCost}</li>
        <button>Add to Cart</button>
      </ul>
    </div>
  );
};

export default ShoppingCart;
