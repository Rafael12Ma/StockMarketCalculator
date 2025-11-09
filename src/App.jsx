import "./App.css";
import Header from "./components/Header";
import StockInput from "./components/StockInput";
import Results from "./components/Results";
import { useState } from "react";
import Places from "./components/Places";
import Error from "./components/Error";
import { useStock } from "./hooks/useStock";
import Login from "./login/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Stockares from "./pages/Stockares";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [{ path: "/stocks", element: <Stockares /> }],
    },
  ]);

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
    <RouterProvider router={router}>
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
    </RouterProvider>
  );
}

export default App;
