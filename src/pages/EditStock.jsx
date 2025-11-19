import { useLoaderData, useParams, useNavigate } from "react-router-dom";

export default function StockEdit() {
  const navigate = useNavigate();
  const params = useParams();
  const stocks = useLoaderData();
  const stock = stocks.find((s) => s.id === Number(params.stockId));

  async function submitHandler(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      currValue: e.target.currValue.value,
      boughtValue: e.target.boughtValue.value,
      quantity: e.target.quantity.value,
    };

    await fetch(`http://localhost:3000/stocks/${stock.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    navigate(`/stocks/${stock.id}`);
  }

  return (
    <form id="user-input" onSubmit={submitHandler}>
      <input name="name" defaultValue={stock.name} />
      <input name="currValue" defaultValue={stock.currValue} />
      <input name="boughtValue" defaultValue={stock.boughtValue} />
      <input name="quantity" defaultValue={stock.quantity} />
      <button>Save</button>
    </form>
  );
}
