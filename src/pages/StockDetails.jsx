import { useLoaderData, useParams } from "react-router-dom";

export default function StockDetails() {
  const params = useParams();
  // const stocks = useLoaderData();
  // const vals = stocks.find((stock) => stock.name === params.stockName);
  // console.log(vals);
  const id = params.stockId - 1;
  const stocks = useLoaderData();
  return (
    <>
      <h1> this is my stock's details</h1>
      <p>{stocks[id].name}</p>
      <p>name-{stocks[id].name}</p>
      <p>Bought value price -{stocks[id].boughtValue}</p>
      <p>Id-{stocks[id].id}</p>
      <p>currValue-{stocks[id].currValue}</p>
      <h2>{}</h2>
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
