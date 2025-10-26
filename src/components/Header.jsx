import imagelogo from "../assets/image.png";

export default function Header() {
  return (
    <header id="header">
      <h1>Stock Analytics</h1>
      <img src={imagelogo} alt="Stock market" />
    </header>
  );
}
