export default function Places({ title, places }) {
  return (
    <section className="stocks-section">
      <h2>Your Stocks</h2>
      <div className="stocks-grid">
        {places.map((place) => (
          <li className="stock-card" key={place.id}>
            <img
              src={`http://localhost:3000/${place.imageSrc}`}
              alt={place.name}
              className="stock-image"
            />
            <div className="stock-info">
              <h3>{place.name}</h3>
              <p
                className={`stock-price ${
                  place.currValue >= place.boughtValue.price
                    ? "positive"
                    : "negative"
                }`}
              >
                ${place.currValue}
              </p>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
}
