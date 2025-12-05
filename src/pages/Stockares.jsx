import StocksCard from "./StocksCard";
import NewStockLinks from "./NewStockLink";
import { useStocksQuery } from "../hooks/useStockQuery";
import LoadingQuery from "../components/LoadingQuery";

export default function Stockares() {
  // tanstackQuery
  const { data, isPending, isError, error } = useStocksQuery();
  let content;

  if (isPending) {
    content = <LoadingQuery text="Fetching Stocks..." />;
  }

  if (isError) {
    content = (
      <p style={{ textAlign: "center" }}>
        Error loading data : {error.message}
      </p>
    );
  }

  // tanstackQuery

  return (
    <>
      <h1>My Stocks</h1>
      <NewStockLinks />

      {content}
      <StocksCard stocks={data} />
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
