export default function StocksPageTest({ stocks }) {
  console.log(stocks);
  return (
    <>
      <ul className="stocks-grid">
        {stocks.map((stock) => (
          <li className="stock-card" key={stock.id}>
            <img
              src={`http://localhost:3000/${stock.imageSrc}`}
              alt={stock.name}
              className="stock-image"
            />
            <div className="stock-info">
              <h3>{stock.name}</h3>
              <p
                className={`stock-price ${
                  stock.currValue >= stock.boughtValue.price
                    ? "positive"
                    : "negative"
                }`}
              >
                ${stock.currValue}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
