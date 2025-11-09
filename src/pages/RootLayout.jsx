import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <h1>RootLayout</h1>
      <Outlet />
    </>
  );
}
