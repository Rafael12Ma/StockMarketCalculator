import { useLoaderData, useParams } from "react-router-dom";
import classes from "../pages/StockDetails.module.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinFill } from "react-icons/ri";

export default function StockDetailHelper() {
  const params = useParams();
  const navigate = useNavigate();

  const id = Number(params.stockId);
  const stocks = useLoaderData();
  const stock = stocks.find((s) => s.id === id);

  console.log(id);

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
  async function deleteHandler() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this stock?"
    );
    if (!confirmDelete) return;

    const response = await fetch(`http://localhost:3000/stocks/${stock.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      navigate("/stocks");
    } else {
      alert("Error deleting stock.");
    }
  }
  return (
    <>
      {!stock ? (
        <div className={classes.notFound}>
          <p>Stock not found 😢</p>
        </div>
      ) : (
        <div className={classes.container}>
          <div className={classes.card}>
            <button
              onClick={() => window.history.back()}
              className={classes.back}
            >
              ← Back to Stocks
            </button>
            <hr className={classes.hr} />
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
                onClick={() => navigate(`/stocks/${stock.id}/edit`)}
                className={classes.button}
              >
                ✏️ Edit
              </button>

              <button onClick={deleteHandler} className={classes.button}>
                <RiDeleteBinFill />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
