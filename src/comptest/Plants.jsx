export default function Plants({ plant }) {
  return (
    <section id="stocksList">
      {plant.length === 0 ? (
        <p>No plants added yet</p>
      ) : (
        <ul>
          {plant.map((pl) => (
            <li key={pl.id}>
              {pl.variety} {pl.number}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
