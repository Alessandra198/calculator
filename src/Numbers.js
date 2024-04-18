import React, { useState } from "react";
import "./Numbers.css";

export default function Numbers() {
  let [operation, setOperation] = useState(null);

  function handleResult(event) {
    console.log(operation);
  }

  function handleClick(event) {
    console.log(event.target.value);
    setOperation(event.target.value);
  }
  return (
    <div className="Numbers">
      <div className="boxes">
        <button className="box" onClick={handleClick} value={7}>
          7
        </button>
        <button className="box" onClick={handleClick} value={8}>
          8
        </button>
        <button className="box" onClick={handleClick} value={9}>
          9
        </button>
        <button className="box" onClick={handleClick} value={"x"}>
          x
        </button>
        <button className="box" onClick={handleClick} value={4}>
          4
        </button>
        <button className="box" onClick={handleClick} value={5}>
          5
        </button>
        <button className="box" onClick={handleClick} value={6}>
          6
        </button>
        <button className="box" onClick={handleClick} value={"-"}>
          -
        </button>
        <button className="box" onClick={handleClick} value={1}>
          1
        </button>
        <button className="box" onClick={handleClick} value={2}>
          2
        </button>
        <button className="box" onClick={handleClick} value={3}>
          3
        </button>
        <button className="box" onClick={handleClick} value={"+"}>
          +
        </button>
        <button className="box" onClick={handleClick} value={0}>
          0
        </button>
        <button className="box" onClick={handleClick} value={"."}>
          ,
        </button>
        <button className="box" onClick={handleClick} value={"/"}>
          /
        </button>
        <button className="box" onClick={handleResult}>
          =
        </button>
      </div>
    </div>
  );
}
