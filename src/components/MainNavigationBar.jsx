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
          Portfolio
        </NavLink>
        <NavLink
          to="/signIn"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          SignIn
        </NavLink>
        <NavLink
          to="/signUp"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          SignUp
        </NavLink>
        <NavLink
          to="/logOut"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          LogOut
        </NavLink>
      </nav>
    </>
  );
}
