import StockInput from "../components/StockInput";
import { useState } from "react";
import { useNavigation } from "react-router-dom";

export default function StockForm() {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [values, setValues] = useState({
    stockName: "",
    stockCurValue: "",
    stockQuantity: "",
    stockBoughtValue: "",
  });

  // Updating the ui based on the submission status :
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";

  let buttonState = (
    <button disabled={isSubmiting} onSubmit={HandleClick}>
      {isSubmiting ? "Submitting" : "Save"}
    </button>
  );

  let message;

  if (buttonIsClicked) {
    buttonState = <button onSubmit={HandleClick}>Save </button>;
  }

  function HandleClick() {
    setButtonIsClicked(() => !buttonIsClicked);
  }

  function handleChange(identifier, newValue) {
    setValues({
      ...values,
      [identifier]: newValue,
    });
  }
  return (
    <>
      <StockInput
        buttonIsClicked={buttonIsClicked}
        buttonState={buttonState}
        handleChange={handleChange}
        values={values}
      />
      {message}
    </>
  );
}
