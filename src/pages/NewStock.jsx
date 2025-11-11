import { redirect } from "react-router-dom";
import StockForm from "../components/StockForm.jsx";

export default function NewStock() {
  return (
    <>
      <StockForm />
    </>
  );
}

export async function action({ request, params }) {
  const data = await request.formData();
  const stockData = {
    name: data.get("stockName"),
    currValue: data.get("stockCurValue"),
    boughtValue: data.get("stockBoughtValue"),
    quantity: data.get("stockQuantity"),
    imageSrc: "apple.png",
  };

  const response = await fetch("http://localhost:3000/stocks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(stockData),
  });

  if (!response.ok) {
    throw { message: "Could not save stock." };
  }
  return redirect("/stocks");
}
