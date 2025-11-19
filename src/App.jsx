import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Stockares, { StocksLoader } from "./pages/Stockares";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import StockDetails, { detailLoader } from "./pages/StockDetails";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import LogOutPage from "./components/LogOutPage";
import NewStock, { action } from "./pages/NewStock";
import StockEdit from "./pages/EditStock";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "stocks",
          element: <Stockares />,
          loader: StocksLoader,
        },
        {
          path: "stocks/:stockId",
          element: <StockDetails />,
          loader: detailLoader,
        },
        {
          path: "/stocks/:stockId/edit",
          element: <StockEdit />,
          loader: detailLoader,
        },
        {
          path: "/signIn",
          element: <SignInPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/signUp",
          element: <SignUpPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/logOut",
          element: <LogOutPage />,
          errorElement: <ErrorPage />,
        },
        { path: "new", element: <NewStock />, action: action },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
