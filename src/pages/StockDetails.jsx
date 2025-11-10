import { useParams } from "react-router-dom";

export default function StockDetails() {
  const params = useParams();

  return (
    <>
      <h1> this is my stock's details</h1>
      <p>{params.stockId}</p>
    </>
  );
}
