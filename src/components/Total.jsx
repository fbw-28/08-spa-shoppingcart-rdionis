import React, { useContext } from "react";
import Context from "../context/Context";

const Total = () => {
  const { total, setTotal } = useContext(Context);

  return (
    <div>
      <h2>Total: $</h2>
      <button onClick={() => setTotal(total)}>Checkout</button>
    </div>
  );
};
