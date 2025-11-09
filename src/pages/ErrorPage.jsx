import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1>There is occured an error.</h1>
      <Link to="/stocks">
        <button>go stocks</button>
      </Link>
    </>
  );
}
