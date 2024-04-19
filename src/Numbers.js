import React, { useState } from "react";
import "./Numbers.css";

export default function Numbers() {
  let [operation, setOperation] = useState(null);

  function handleResult() {
    // eslint-disable-next-line
    console.log(eval(operation));
    setOperation(null);
  }

  function handleClick(event) {
    console.log(event.target.value);
    if (operation) {
      setOperation(operation + event.target.value);
    } else {
      setOperation(event.target.value);
    }
  }
  return (
    <div className="Numbers">
      <form className="boxes">
        <input type="button" className="box" onClick={handleClick} value="7" />
        <input type="button" className="box" onClick={handleClick} value="8" />
        <input type="button" className="box" onClick={handleClick} value="9" />
        <input type="button" className="box" onClick={handleClick} value="*" />
        <input type="button" className="box" onClick={handleClick} value="4" />
        <input type="button" className="box" onClick={handleClick} value="5" />
        <input type="button" className="box" onClick={handleClick} value="6" />
        <input type="button" className="box" onClick={handleClick} value="-" />
        <input type="button" className="box" onClick={handleClick} value="1" />
        <input type="button" className="box" onClick={handleClick} value="2" />
        <input type="button" className="box" onClick={handleClick} value="3" />
        <input type="button" className="box" onClick={handleClick} value="+" />
        <input type="button" className="box" onClick={handleClick} value="0" />
        <input type="button" className="box" onClick={handleClick} value="." />
        <input type="button" className="box" onClick={handleClick} value="/" />
        <input type="button" className="box" onClick={handleResult} value="=" />
      </form>
    </div>
  );
}
