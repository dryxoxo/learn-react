import Keranjang from "./components/Keranjang";
import ListProduct from "./components/ListProduct";
import SummaryPembelian from "./components/SummaryPembelian";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  
  return (
  <>
  <div>
    <Keranjang/>
    <ListProduct/>
    <SummaryPembelian/>
  </div>
  </>
  );
}

export default App;
