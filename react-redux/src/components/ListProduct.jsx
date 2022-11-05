import React, { useState } from "react";
import Counter from "./Counter";

export default function ListProduct() {
  const [products, setProducts] = useState([
    {
      id: 1,
      nama: "Buku",
    },
    {
      id: 2,
      nama: "Pulpen",
    },
  ]);

  return (
    <>
        {products.map(({ id, nama }) => (
          <div key={id}>
            <p>{nama}</p>
            <Counter />
            <hr />
          </div>
        ))}
    </>
  );
}
