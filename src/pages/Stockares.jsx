import { Link, useLoaderData, Await } from "react-router-dom";
import StocksPageTest from "./StocksPageTest";
import { Suspense, lazy } from "react";


export default function Stockares() {
  const { stocks } = useLoaderData();
  const NewStockLinks = lazy(() => import("./NewStockLink"));
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={stocks}>
          {(loadedStocks) => <StocksPageTest stocks={loadedStocks} />}
        </Await>
      </Suspense>
      <h1>My Stocks</h1>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading test...</p>}
      >
        <NewStockLinks />
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
