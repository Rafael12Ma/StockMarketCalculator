import "./App.css";
import Header from "./components/Header";
import StockInput from "./components/StockInput";
import Results from "./components/Results";
import { useRef, useState } from "react";
import Places from "./components/Places";
import Error from "./components/Error";
import { useStock } from "./hooks/useStock";
import Login from "./login/Login";

// import TaskInput from "./comptest/TaskInput";
// import Tasks from "./comptest/Tasks";
// import { useRef } from "react";

function App() {
  //Try of refs and state double input on list mapping
  // const taskRef = useRef();
  // const descRef = useRef();
  // const [tasks, setTasks] = useState({
  //   sumTasks: [],
  // });

  // function handleAddTask(enteredTask, enteredDesc) {
  //   if (!enteredDesc.trim() || !enteredTask.trim()) return;

  //   const newVar = {
  //     task: enteredTask,
  //     desc: enteredDesc,
  //     id: Math.random(),
  //   };
  //   setTasks((prev) => ({
  //     ...prev,
  //     sumTasks: [...prev.sumTasks, newVar],
  //   }));
  //   taskRef.current.value = "";
  //   descRef.current.value = "";
  // }

  //
  // Handling refs for form

  //
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [values, setValues] = useState({
    stockName: "",
    stockValue: "",
    stockQuantity: "",
    stockBoughtValue: "",
  });

  let buttonState = <button onClick={HandleClick}>Save</button>;

  if (buttonIsClicked) {
    buttonState = <button onClick={HandleClick}>Set new</button>;
  }

  function HandleClick() {
    setButtonIsClicked(() => !buttonIsClicked);
  }

  let quantityIsValid = values.stockQuantity >= 0;
  let valueIsValid = values.stockValue > 0;
  let message;
  if (buttonIsClicked) {
    if (quantityIsValid && valueIsValid) {
      message = <Results buttonIsClicked={buttonIsClicked} values={values} />;
    } else if (quantityIsValid && !valueIsValid) {
      message = (
        <h1 className="center">Please set a Stock Value greater than 0!</h1>
      );
    } else if (!quantityIsValid && valueIsValid) {
      message = <h1 className="center">Please set a Quantity value {">"}=0</h1>;
    } else if (!quantityIsValid && !valueIsValid) {
      message = (
        <h1 className="center">
          Please set a Stock Value greater than 0 and a Quantity value {">"}=0
        </h1>
      );
    }
  }
  function handleChange(identifier, newValue) {
    setValues({
      ...values,
      [identifier]: newValue,
    });
  }

  const { stocksBackend, isFetching, error } = useStock();

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  return (
    <div id="body">
      <Header />
      <Login />
      <Places
        error={error}
        isLoading={isFetching}
        loadingText={"Fetching stock data..."}
        fallbackText="No stocks available!"
        stocks={stocksBackend}
        // fallbackText="No places available."
        // onSelectPlace={onSelectPlace}
      />
      {/*  */}
      {/* <TaskInput
        handleAddTask={handleAddTask}
        taskRef={taskRef}
        descRef={descRef}
      />
      <Tasks tasks={tasks.sumTasks} /> */}
      {/*  */}
      <StockInput
        buttonIsClicked={buttonIsClicked}
        buttonState={buttonState}
        handleChange={handleChange}
        values={values}
      />
      {message}
    </div>
  );
}

export default App;
