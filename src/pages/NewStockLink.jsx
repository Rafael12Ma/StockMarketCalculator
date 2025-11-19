import { Link } from "react-router-dom";
import classes from "./NewStockLink.module.css";
import { IoMdAdd } from "react-icons/io";

export default function NewStockLink() {
  return (
    <h1>
      <Link className={classes.link} to="/new">
        <button className={classes.add}>
          <IoMdAdd />
        </button>
      </Link>
    </h1>
  );
}
