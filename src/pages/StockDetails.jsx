import LoadingQuery from "../components/LoadingQuery";
import StockDetailHelper from "../components/StockDetailHelper";
import { useStocksQuery } from "../hooks/useStockQuery";

export default function StockDetails() {
  const { data, isError, error } = useStocksQuery();
  let content;

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
      {content}
      {data && <StockDetailHelper />}
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
