export default function Places({
  stocks,
  isLoading,
  loadingText,
  fallbackText,
}) {
  return (
    <section className="stocks-section">
      <h2>Your Stocks</h2>
      {isLoading && <p>{loadingText}</p>}
      {!isLoading && stocks.length === 0 && <p>{fallbackText}</p>}
      {!isLoading && stocks.length > 0 && (
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
      )}
    </section>
  );
}
