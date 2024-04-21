import React, { useState } from "react";
import "./Numbers.css";
import Calculator from "./Calculator";

export default function Numbers() {
  let [operation, setOperation] = useState(null);

  function handleSymbols(event) {
    let lastSymbol = operation.charAt(operation.length - 1);
    if (
      lastSymbol === "+" ||
      lastSymbol === "-" ||
      lastSymbol === "*" ||
      lastSymbol === "/"
    ) {
      let newOperation = operation.slice(0, -1);
      setOperation(newOperation + event.target.value);
    } else {
      setOperation(operation + event.target.value);
      console.log(operation);
    }
  }

  function percentage(event) {
    let newOperation = operation / 100;
    setOperation(newOperation);
  }

  function handleComma(event) {
    console.log(event.target.value);
    let bool = true;
    let element = operation;

    for (let i = 0; i < operation.length; i++) {
      let check = element.charAt(element.length - 1);
      console.log(check);
      if (check === ".") {
        bool = false;
        break;
      }
      if (check === "+" || check === "-" || check === "*" || check === "/") {
        bool = true;
        break;
      }
      element = element.slice(0, -1);
    }

    if (bool) {
      setOperation(operation + event.target.value);
    }
  }

  function handleResult() {
    let lastSymbol = operation.charAt(operation.length - 1);
    let newOperation = null;
    if (
      lastSymbol === "+" ||
      lastSymbol === "-" ||
      lastSymbol === "*" ||
      lastSymbol === "/"
    ) {
      newOperation = operation.slice(0, -1);
    } else {
      newOperation = operation;
    }
    // eslint-disable-next-line
    setOperation(eval(newOperation));
  }

  function resetOperation() {
    setOperation(null);
  }

  function deleteLast() {
    let newOperation = operation.slice(0, -1);
    setOperation(newOperation);
  }

  function handleClick(event) {
    if (operation) {
      setOperation(operation + event.target.value);
    } else {
      setOperation(event.target.value);
    }
  }
  return (
    <div className="Numbers">
      <Calculator operation={operation} />
      <form className="boxes">
        <input
          type="button"
          className="box"
          onClick={resetOperation}
          value="AC"
        />
        <input type="button" className="box" onClick={percentage} value="%" />
        <input type="button" className="box" onClick={deleteLast} value="CE" />
        <input
          type="button"
          className="box"
          onClick={handleSymbols}
          value="/"
        />

        <input type="button" className="box" onClick={handleClick} value="7" />
        <input type="button" className="box" onClick={handleClick} value="8" />
        <input type="button" className="box" onClick={handleClick} value="9" />
        <input
          type="button"
          className="box"
          onClick={handleSymbols}
          value="*"
        />
        <input type="button" className="box" onClick={handleClick} value="4" />
        <input type="button" className="box" onClick={handleClick} value="5" />
        <input type="button" className="box" onClick={handleClick} value="6" />
        <input
          type="button"
          className="box"
          onClick={handleSymbols}
          value="-"
        />
        <input type="button" className="box" onClick={handleClick} value="1" />
        <input type="button" className="box" onClick={handleClick} value="2" />
        <input type="button" className="box" onClick={handleClick} value="3" />
        <input
          type="button"
          className="box"
          onClick={handleSymbols}
          value="+"
        />
        <input type="button" className="box" onClick={handleClick} value="00" />
        <input type="button" className="box" onClick={handleClick} value="0" />
        <input type="button" className="box" onClick={handleComma} value="." />
        <input type="button" className="box" onClick={handleResult} value="=" />
      </form>
    </div>
  );
}
