import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Stockares, { StocksLoader } from "./pages/Stockares";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import StockDetails, { detailLoader } from "./pages/StockDetails";
import SignInPage from "./components/SignInPage";
import LogOutPage from "./components/LogOutPage";
import NewStock, { action } from "./pages/NewStock";
import EditStock from "./pages/EditStock";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SignUpPage from "./components/SignUpPage";
import { queryClient } from "./util/http";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
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
          element: <EditStock />,
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
        {
          path: "new",
          element: <NewStock />,
          action: action,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
