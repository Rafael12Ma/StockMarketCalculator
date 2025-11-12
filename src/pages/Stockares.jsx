import { Link, useLoaderData, Await } from "react-router-dom";
import StocksPageTest from "./StocksPageTest";
import { Suspense } from "react";

export default function Stockares() {
  const { stocks } = useLoaderData();

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={stocks}>
          {(loadedStocks) => <StocksPageTest stocks={loadedStocks} />}
        </Await>
      </Suspense>
      <h1>My Stocks</h1>
      <h1>
        <Link to="/new">New Stock form</Link>
      </h1>{" "}
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
