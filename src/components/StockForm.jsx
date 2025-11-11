import StockInput from "../components/StockInput";
import Results from "../components/Results.jsx";
import { useState } from "react";

export default function StockForm() {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [values, setValues] = useState({
    stockName: "",
    stockCurValue: "",
    stockQuantity: "",
    stockBoughtValue: "",
  });
  let buttonState = <button onSubmit={HandleClick}>Save</button>;
  let quantityIsValid = values.stockQuantity >= 0;
  let valueIsValid = values.stockCurValue > 0;
  let message;

  if (buttonIsClicked) {
    buttonState = <button onSubmit={HandleClick}>Save </button>;
  }

  function HandleClick() {
    setButtonIsClicked(() => !buttonIsClicked);
  }
  if (buttonIsClicked) {
    if (quantityIsValid && valueIsValid) {
      message = <Results buttonIsClicked={buttonIsClicked} values={values} />;
    } else if (quantityIsValid && !valueIsValid) {
      message = (
        <h1 className="center">Please set a Stock Value greater than 0!</h1>
      );
    } else if (!quantityIsValid && valueIsValid) {
      message = <h1 className="center">Please set a Quantity value {">"}=0</h1>;
    } else if (!quantityIsValid && !valueIsValid) {
      message = (
        <h1 className="center">
          Please set a Stock Value greater than 0 and a Quantity value {">"}=0
        </h1>
      );
    }
  }
  function handleChange(identifier, newValue) {
    setValues({
      ...values,
      [identifier]: newValue,
    });
  }
  return (
    <>
      <StockInput
        buttonIsClicked={buttonIsClicked}
        buttonState={buttonState}
        handleChange={handleChange}
        values={values}
      />
      {message}
    </>
  );
}
