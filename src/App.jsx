import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Stockares, { StocksLoader } from "./pages/Stockares";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import StockDetails from "./pages/StockDetails";

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
        { path: "stocks/:stockId", element: <StockDetails /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
