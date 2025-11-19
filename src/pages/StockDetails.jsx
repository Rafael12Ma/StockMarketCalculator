import StockDetailHelper from "../components/StockDetailHelper";

export default function StockDetails() {
  return (
    <>
      <StockDetailHelper />
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
