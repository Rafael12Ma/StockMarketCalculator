import { Outlet } from "react-router-dom";
import MainNavigationBar from "../components/MainNavigationBar";
import { useNavigation } from "react-router-dom";

export default function RootLayout() {
  const navigate = useNavigation();
  return (
    <>
      <MainNavigationBar />
      <main>
        {navigate.state === "loading" ? (
          <p style={{ textAlign: "center" }}>Loading ...</p>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}
