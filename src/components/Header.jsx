import { useRef, useState } from "react";
import imagelogo from "../assets/image.png";
import NewTask from "./NewTask";
import Stocks from "./Stocks";

export default function Header() {
  const refStock = useRef();
  const refPrice = useRef();

  const [vals, setVals] = useState({
    stocks: [],
  });

  function handleAdd(stockName, stockPrice) {
    if (!stockName.trim() || !stockPrice.trim()) return;

    const newStock = {
      name: stockName,
      price: parseFloat(stockPrice),
      id: Math.random(),
    };

    setVals((prev) => ({
      ...prev,
      stocks: [...prev.stocks, newStock],
    }));

    // clear inputs
    refStock.current.value = "";
    refPrice.current.value = "";
  }
  function handleDeleteStock(id) {
    setVals((prev) => ({
      ...prev,
      stocks: prev.stocks.filter((stock) => stock.id !== id),
    }));
  }

  return (
    <header id="header">
      <h1>Stock Analytics</h1>
      <img src={imagelogo} alt="Stock market" />

      <NewTask
        refStock={refStock}
        refPrice={refPrice}
        handleAdd={handleAdd}
        label="Stock's Name"
      />
      <hr />
      <Stocks onDelete={handleDeleteStock} stocks={vals.stocks} />
    </header>
  );
}
