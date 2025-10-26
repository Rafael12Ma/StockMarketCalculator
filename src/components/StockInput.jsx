export default function StockInput({
  handleChange,
  values,
  buttonState,
  buttonIsClicked,
}) {
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <label htmlFor="">Stock's Name</label>
          <input
            disabled={buttonIsClicked}
            value={values.stockName}
            onChange={(event) => handleChange("stockName", event.target.value)}
            required
            type="text"
            name=""
            id=""
          />
          <label htmlFor="">Stock' cur Value</label>
          <input
            disabled={buttonIsClicked}
            value={values.stockValue}
            onChange={(event) => handleChange("stockValue", event.target.value)}
            required
            type="text"
            name=""
            id=""
          />
          <label htmlFor="">Stock's Quantity</label>
          <input
            disabled={buttonIsClicked}
            value={values.stockQuantity}
            onChange={(event) =>
              handleChange("stockQuantity", event.target.value)
            }
            required
            type="text"
            name=""
            id=""
          />

          {buttonState}
        </div>
      </div>
    </>
  );
}
