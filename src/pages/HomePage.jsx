import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";
import Header from "../components/Header";
import Login from "../login/Login";
import Places from "../components/Places";
import StockInput from "../components/StockInput";
import { useState } from "react";
import Results from "../components/Results";
import { useStock } from "../hooks/useStock";
import Error from "../components/Error";

export default function HomePage() {
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

  const { stocksBackend, isFetching, error } = useStock();

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  return (
    <div id="body">
      <Header />
      <Login />
      <Places
        error={error}
        isLoading={isFetching}
        loadingText={"Fetching stock data..."}
        fallbackText="No stocks available!"
        stocks={stocksBackend}
      />
      <StockInput
        buttonIsClicked={buttonIsClicked}
        buttonState={buttonState}
        handleChange={handleChange}
        values={values}
      />
      {message}
    </div>
  );
}
