import { Link } from "react-router-dom";

export default function StocksCard({ stocks }) {
  return (
    <>
      <ul className="stocks-grid">
        {stocks.map((stock) => (
          <li key={stock.id} className="stock-card">
            <Link to={`/stocks/${stock.id}`}>
              <img
                src={`http://localhost:3000/${stock.imageSrc}`}
                alt={stock.name}
                className="stock-image"
              />
              <div className="stock-info">
                <h3>{stock.name}</h3>
                <p
                  className={`stock-price ${
                    stock.currValue >= stock.boughtValue
                      ? "positive"
                      : "negative"
                  }`}
                >
                  {Number(stock.currValue).toFixed(2)} $
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
