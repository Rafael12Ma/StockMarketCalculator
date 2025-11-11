import { Form } from "react-router-dom";

export default function StockInput({
  handleChange,
  values,
  buttonState,
  buttonIsClicked,
}) {
  return (
    <Form method="post" id="user-input">
      <div className="input-group">
        <label>Stock's Name</label>
        <input
          disabled={buttonIsClicked}
          value={values.stockName}
          onChange={(e) => handleChange("stockName", e.target.value)}
          required
          type="text"
          name="stockName"
        />
      </div>

      <div className="input-group">
        <label>Stock's Current Value</label>
        <input
          disabled={buttonIsClicked}
          value={values.stockCurValue}
          onChange={(e) => handleChange("stockCurValue", e.target.value)}
          required
          type="number"
          name="stockCurValue"
        />
      </div>

      <div className="input-group">
        <label>Stock's Quantity</label>
        <input
          disabled={buttonIsClicked}
          value={values.stockQuantity}
          onChange={(e) => handleChange("stockQuantity", e.target.value)}
          required
          type="number"
          name="stockQuantity"
        />
      </div>

      <div className="input-group">
        <label>Stock's Bought Value</label>
        <input
          disabled={buttonIsClicked}
          value={values.stockBoughtValue}
          onChange={(e) => handleChange("stockBoughtValue", e.target.value)}
          required
          type="number"
          name="stockBoughtValue"
        />
      </div>
      {buttonState}
    </Form>
  );
}
