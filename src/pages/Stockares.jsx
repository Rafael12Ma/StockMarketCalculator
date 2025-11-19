import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import StocksCard from "./StocksCard";
import NewStockLinks from "./NewStockLink";

export default function Stockares() {
  const { stocks } = useLoaderData();

  return (
    <>
      <h1>My Stocks</h1>

      <NewStockLinks />
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading stocks...</p>}
      >
        <Await resolve={stocks}>
          {(loadedStocks) => <StocksCard stocks={loadedStocks} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadStocks() {
  const response = await fetch("http://localhost:3000/stocks");
  if (!response.ok) {
    throw { message: "Could not fetch stocks." };
  } else {
    const resData = await response.json();
    return resData.stocks;
  }
}

export function StocksLoader() {
  return {
    stocks: loadStocks(),
  };
}
