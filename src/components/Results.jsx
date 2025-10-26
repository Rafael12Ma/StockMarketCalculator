export default function Results({ values, buttonIsClicked }) {
  let totalMoney = values.stockQuantity * values.stockValue;
  totalMoney = totalMoney.toFixed(2);
  return (
    <div id="result">
      {buttonIsClicked ? (
        <p>
          Your current amount of <span id="bold"> {values.stockName}</span> is{" "}
          <span>{values.stockQuantity}</span> which costs{" "}
          <span>{values.stockValue}$</span>, so your total money is{" "}
          <span>{totalMoney}$</span>
        </p>
      ) : undefined}
    </div>
  );
}
