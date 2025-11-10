import { NavLink } from "react-router-dom";
import classes from "../pages/RootLayout.module.css";

export default function MainNavigationBar() {
  return (
    <>
      <nav className={classes.navbar}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          Home
        </NavLink>

        <NavLink
          to="stocks"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Stocks
        </NavLink>
      </nav>
    </>
  );
}
