import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  incrementKeranjang,
  decrementKeranjang,
} from "../redux/action/keranjangAction";

export default function Counter() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
    dispatch(incrementKeranjang());
  };
  const decrement = () => {
    count > 0 && dispatch(decrementKeranjang())
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
