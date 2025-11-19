import { Suspense } from "react";
import StockDetailHelper from "../components/StockDetailHelper";
import { Await, useLoaderData } from "react-router-dom";

export default function StockDetails() {
  return (
    <>
      <Suspense fallback={<p>Loading stock card</p>}>
        <Await>
          <StockDetailHelper />
        </Await>
      </Suspense>
    </>
  );
}

export async function detailLoader() {
  const response = await fetch("http://localhost:3000/stocks");
  if (!response.ok) {
    throw { message: "Could not fetch stock details." };
  } else {
    const resData = await response.json();
    return resData.stocks;
  }
}
