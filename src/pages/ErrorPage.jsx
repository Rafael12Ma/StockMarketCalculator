import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1>An error has occured.</h1>
      <Link to="/">
        <button>go to stocks</button>
      </Link>
    </>
  );
}
