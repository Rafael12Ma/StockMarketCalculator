// LoadingQuery.jsx
import { Atom } from "react-loading-indicators";

export default function LoadingQuery({ text = "Loading..." }) {
  return (
    <div style={{ textAlign: "center" }}>
      <Atom textColor="yellow" text={text} color="white" size="large" />
    </div>
  );
}
