import { useLoaderData, useParams } from "react-router-dom";
import classes from "../pages/StockDetails.module.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaEuroSign } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteStock, fetchStock, queryClient } from "../util/http";
import Error from "./Error";
import LoadingQuery from "./LoadingQuery";
import { useState } from "react";

export default function StockDetailHelper() {
  // useQuery
  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["stocks", params.stockId],
    queryFn: ({ signal }) => fetchStock({ signal, stockId: params.stockId }),
  });
  let content;
  // console.log(data);

  if (isPending) {
    content = <LoadingQuery text="Fetching Stock..." />;
  }

  if (isError) {
    content = (
      <div>
        <Error
          title="error fetching stock card re "
          message={
            error.info?.message ||
            "Failed to fetch stock card on error component"
          }
        />
      </div>
    );
  }

  //  </useQuery>
  const navigate = useNavigate();

  const id = Number(params.stockId);
  const stocks = useLoaderData();
  const stock = stocks.find((s) => s.id === id);

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
  let toEuro = profit * 0.87;
  toEuro = toEuro.toFixed(2);

  // async function deleteHandler() {
  //   const confirmDelete = window.confirm(
  //     "Are you sure you want to delete this stock?"
  //   );
  //   if (!confirmDelete) return;

  //   const response = await fetch(`http://localhost:3000/stocks/${stock.id}`, {
  //     method: "DELETE",
  //   });

  //   if (response.ok) {
  //     navigate("/stocks");
  //   } else {
  //     alert("Error deleting stock.");
  //   }
  // }

  // delete with useMutation
  const { mutate } = useMutation({
    mutationFn: deleteStock,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stocks"],
      });
      navigate("/stocks");
    },
  });
  const [isDeleting, setIsDeleting] = useState(false);
  function deleteHandler() {
    mutate({ id: params.stockId });
    setIsDeleting(true);
  }
  // </delete with useMutation>
  if (data) {
    content = data && (
      <>
        <div className={classes.container}>
          <div className={classes.card}>
            <button
              onClick={() => navigate("/stocks")}
              className={classes.back}
            >
              ← Back to Stocks
            </button>
            <hr className={classes.hr} />
            <div className={classes.header}>
              <img
                src={`http://localhost:3000/${data.imageSrc}`}
                alt={data.name}
                className={classes.image}
              />
              <h1 className={classes.title}>{data.name}</h1>
            </div>

            <div className={classes.details}>
              <div className={classes.row}>
                <span>Value</span>
                <span>{data.curVal} $</span>
              </div>

              <div className={classes.row}>
                <span>Quantity</span>
                <span>{data.quantity}</span>
              </div>

              <div className={classes.row}>
                <span>Worth</span>
                <span>{data.currValue * data.quantity} $</span>
              </div>
            </div>

            {/*  */}

            <div className={classes.details}>
              <div className={classes.row}>
                <span>Bought avg. Value</span>
                <span>{data.boughtValue} $</span>
              </div>

              <div className={classes.row}>
                <span>Profit</span>
                <span className={bool ? classes.positive : classes.negative}>
                  {profit}$ {bool ? <FaArrowUp /> : <FaArrowDown />} {precent} %
                </span>
              </div>

              <div className={classes.row}>
                <span>
                  <FaEuroSign />
                </span>
                <span className={bool ? classes.positive : classes.negative}>
                  {toEuro}
                  <FaEuroSign /> {bool ? <FaArrowUp /> : <FaArrowDown />}{" "}
                  {precent} %
                </span>
              </div>
            </div>
            {!isDeleting ? (
              <div className={classes.footer}>
                <button
                  disabled={isDeleting}
                  onClick={() => navigate(`/stocks/${data.id}/edit`)}
                  className={classes.button}
                >
                  ✏️ Edit
                </button>

                <button
                  disabled={isDeleting}
                  onClick={deleteHandler}
                  className={classes.button}
                >
                  <RiDeleteBinFill />
                </button>
              </div>
            ) : (
              <LoadingQuery textColor="black" color="red" text="Deleting..." />
            )}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {/* {stock && (
        <div className={classes.container}>
          <div className={classes.card}>
            <button
              onClick={() => navigate("/stocks")}
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

              <div className={classes.row}>
                <span>
                  <FaEuroSign />
                </span>
                <span className={bool ? classes.positive : classes.negative}>
                  {toEuro}
                  <FaEuroSign /> {bool ? <FaArrowUp /> : <FaArrowDown />}{" "}
                  {precent} %
                </span>
              </div>
            </div>
            

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
      )} */}
      {content}
    </>
  );
}
