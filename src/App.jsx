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
import { lazy, Suspense } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SignUpPage from "./components/SignUpPage";

function App() {
  // const SignUpPage = lazy(() => import("./components/SignUpPage"));
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
          element: (
            // <Suspense fallback={<p style={{ textAlign: "center" }}>Loading</p>}>
            <SignUpPage />
            // </Suspense>
          ),

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
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
