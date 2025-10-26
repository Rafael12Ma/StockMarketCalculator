export default function Results({ values, buttonIsClicked }) {
  let totalMoney = values.stockQuantity * values.stockValue;
  totalMoney = totalMoney.toFixed(2);
  let haveWonMoney = values.stockValue > values.stockBoughtValue;
  let moneychanged = Math.abs(values.stockValue - values.stockBoughtValue);
  moneychanged = moneychanged.toFixed(2);
  let moneyPrecent = (moneychanged / values.stockBoughtValue) * 100;
  moneyPrecent = moneyPrecent.toFixed(2);
  return (
    <div id="result">
      {buttonIsClicked ? (
        <div>
          <p>
            Your current amount of <span id="bold"> {values.stockName}</span> is{" "}
            <span>{values.stockQuantity}</span> which costs{" "}
            <span>{values.stockValue}$</span>, so your total money is{" "}
            <span>{totalMoney}$</span>
          </p>
          {}

          <p>
            Your money has {haveWonMoney ? "increased" : "dicreased"} by{" "}
            <span id={haveWonMoney ? "won" : "lost"}>{moneyPrecent}%,</span> you
            have {haveWonMoney ? "gained" : "lost"}{" "}
            <span id={haveWonMoney ? "won" : "lost"}>
              {(moneychanged * values.stockQuantity).toFixed(2)}${" "}
              {haveWonMoney ? "profit." : "loss."}
            </span>
          </p>
        </div>
      ) : undefined}
    </div>
  );
}
