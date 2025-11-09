import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={classes.homepage}>

      <Link to="/stocks">
        <button>Get started</button>
      </Link>
    </div>
  );
}
