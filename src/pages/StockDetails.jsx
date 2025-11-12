import { useLoaderData, useParams } from "react-router-dom";
import classes from "./StockDetails.module.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function StockDetails() {
  const params = useParams();
  // const stocks = useLoaderData();
  // const vals = stocks.find((stock) => stock.name === params.stockName);
  // console.log(vals);
  const id = params.stockId - 1;
  const stocks = useLoaderData();
  const stock = stocks[id];

  let a;
  let precent;

  a = Math.abs(stock.boughtValue - stock.currValue);
  precent = (a / stock.boughtValue) * 100;
  precent = precent.toFixed(2);

  let profit;
  let curVal = parseFloat(stock.currValue);
  curVal = curVal.toFixed(2);
  const boughtVal = parseFloat(stock.boughtValue);
  const quant = parseFloat(stock.quantity);

  let bool = curVal > boughtVal;

  profit = curVal * quant - boughtVal * quant;
  profit = profit.toFixed(2);

  return (
    <>
      {!stock ? (
        <div className={classes.notFound}>
          <p>Stock not found 😢</p>
        </div>
      ) : (
        <div className={classes.container}>
          <div className={classes.card}>
            <div className={classes.header}>
              <img
                src={`http://localhost:3000/${stock.imageSrc}`}
                alt={stock.name}
                className={classes.image}
              />
              <h1 className={classes.title}>{stock.name}</h1>
            </div>

            <div className={classes.details}>
              <div className={classes.row}>
                <span>Value</span>
                <span>{curVal} $</span>
              </div>

              <div className={classes.row}>
                <span>Quantity</span>
                <span>{stock.quantity}</span>
              </div>

              <div className={classes.row}>
                <span>Worth</span>
                <span>{stock.currValue * stock.quantity} $</span>
              </div>
            </div>

            {/*  */}

            <div className={classes.details}>
              <div className={classes.row}>
                <span>Bought avg. Value</span>
                <span>{stock.boughtValue} $</span>
              </div>

              <div className={classes.row}>
                <span>Profit</span>
                <span className={bool ? classes.positive : classes.negative}>
                  {profit}$ {bool ? <FaArrowUp /> : <FaArrowDown />} {precent} %
                </span>
              </div>
            </div>
            {/*  */}
            <div className={classes.footer}>
              <button
                onClick={() => window.history.back()}
                className={classes.button}
              >
                ← Back to Stocks
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export async function detailLoader() {
  const response = await fetch("http://localhost:3000/stocks");
  if (!response.ok) {
    throw { message: "Could not fetch stock details." };
  } else {
    const resData = await response.json();
    return resData.stocks;
  }
}
