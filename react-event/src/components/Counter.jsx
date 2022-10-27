import { useState } from "react";
import React from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => count>0 ? setCount(count - 1):setCount(0);

  return (
    <div>
      <button onClick={decrement} className='btn btn-primary col'>-</button>
      <p>{count}</p>
      <button onClick={increment} className='btn btn-primary col'>+</button>
    </div>
  );
}

export default Counter;