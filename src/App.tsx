/* eslint-disable no-mixed-operators */
import React, { useState } from "react";
import "./App.css";
import "./styles.css";
// import numberButton from './Numberbutton';

function App() {
  const [calc, setCalc] = useState("");
  // calculations

  const [result, setResult] = useState("");
  //results

  // const [delete, setDelete] = useState("")

  const ops = ["/", "*", "+", "-", "."];
  // opperations

  const updateCalc = (value: string) => {
    if (
      (ops.includes(value) && calc === "") ||
      // if last value in not a operator or nothing allow for 1 operator to be pressed
      (ops.includes(value) && ops.includes(calc.slice(-1)))
      // if last value has a operator will not allow for another operator to be pressed (prevents from operators to be pressed in consession)
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      // this 4 loop will create buttons for the numbers 1-9
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLastInput = () => {
    if (calc === "") {
      return;
    } else {
      const value = calc.slice(0, -1);

      setResult(value)

      setCalc(value);
    }
  };

  const deleteAll = () => {
    if (calc === "") {
      return
    } else {
      const value = "";

      setResult("");

      setCalc(value)
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result}</span> : " "}
          {/* if theres a value it will show if not its blank */}
          {calc || 0}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={deleteLastInput}>DEL</button>

          <button onClick={deleteAll}>A/C</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
