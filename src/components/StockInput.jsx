import { useEffect, useState } from "react";

export default function StockInput({
  handleChange,
  values,
  buttonState,
  buttonIsClicked,
}) {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <label htmlFor="">Stock's Name</label>
          <input
            disabled={buttonIsClicked}
            value={values.stockName}
            onChange={(event) => handleChange("stockName", event.target.value)}
            required
            type="text"
          />
        </div>
        <div className="input-group">
          {" "}
          <label htmlFor="">Stock' cur Value</label>
          <input
            disabled={buttonIsClicked}
            value={values.stockValue}
            onChange={(event) => handleChange("stockValue", event.target.value)}
            required
            type="text"
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Stock's Quantity</label>
          <input
            disabled={buttonIsClicked}
            value={values.stockQuantity}
            onChange={(event) =>
              handleChange("stockQuantity", event.target.value)
            }
            required
            type="text"
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Stock's Bought Value</label>
          <input
            disabled={buttonIsClicked}
            value={values.stockBoughtValue}
            onChange={(event) =>
              handleChange("stockBoughtValue", event.target.value)
            }
            required
            type="text"
          />
        </div>
        {buttonState}
      </section>
    </>
  );
}
