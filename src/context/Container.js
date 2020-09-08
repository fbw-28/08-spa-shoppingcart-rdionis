import React, { useState } from "react";
import Context from "./Context";

const Container = (props) => {
  const [total, setTotal] = useState(0);

  return (
    <Context.Provider value={{ total, setTotal }}>
      {props.children}
    </Context.Provider>
  );
};
