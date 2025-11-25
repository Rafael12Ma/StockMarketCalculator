import StocksCard from "./StocksCard";
import NewStockLinks from "./NewStockLink";
import { useQuery } from "@tanstack/react-query";
import { fetchStocks } from "../util/http";
import { Atom } from "react-loading-indicators";

export default function Stockares() {
  // tanstackQuery
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["stocks"],
    queryFn: fetchStocks,
  });

  let content;

  if (isPending) {
    content = (
      <div style={{ textAlign: "center" }}>
        <Atom
          textColor="yellow"
          text="Fetching Stocks..."
          color="white"
          size="large"
        />
      </div>
    );
  }

  if (isError) {
    content = <p>Error loading data:{error.message}</p>;
  }

  // tanstackQuery

  return (
    <>
      <h1>My Stocks</h1>
      <NewStockLinks />

      {content}
      {data && <StocksCard stocks={data} />}
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
