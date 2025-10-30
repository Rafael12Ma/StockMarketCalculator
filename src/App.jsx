import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import StockInput from "./components/StockInput";
import Results from "./components/Results";
import { useRef, useState } from "react";
import PlantInput from "./comptest/PlantInput";
import Plants from "./comptest/Plants";

function App() {
  //Try of refs and state double input on list mapping

  //
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [values, setValues] = useState({
    stockName: "",
    stockValue: "",
    stockQuantity: "",
    stockBoughtValue: "",
  });

  let buttonState = <button onClick={HandleClick}>Save</button>;

  if (buttonIsClicked) {
    buttonState = <button onClick={HandleClick}>Set new</button>;
  }

  function HandleClick() {
    setButtonIsClicked(() => !buttonIsClicked);
  }

  let quantityIsValid = values.stockQuantity >= 0;
  let valueIsValid = values.stockValue > 0;
  let message;
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
    <div id="body">
      <Header />
      {/*  */}

      {/*  */}
      <StockInput
        buttonIsClicked={buttonIsClicked}
        buttonState={buttonState}
        handleChange={handleChange}
        values={values}
      />
      <Table />
      {message}
    </div>
  );
}

export default App;
