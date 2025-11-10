import { Link, useLoaderData } from "react-router-dom";
import StocksPageTest from "./StocksPageTest";

export default function Stockares() {
  const PRODUCTS = [
    {
      title: "stock-1",
      price: 70,
    },
    {
      title: "stock-2",
      price: 60,
    },
    {
      title: "stock-3",
      price: 80,
    },
  ];
  const stocks = useLoaderData();

  return (
    <>
      <h1>Stocks</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.title}>
            <Link to={prod.title}>{prod.title}</Link>
          </li>
        ))}
      </ul>
      <StocksPageTest stocks={stocks} />
    </>
  );
}

export async function StocksLoader() {
  const response = await fetch("http://localhost:3000/stocks");
  if (!response.ok) {
    throw { message: "Could not fetch stocks." };
  } else {
    const resData = await response.json();
    return resData.stocks;
  }
}
