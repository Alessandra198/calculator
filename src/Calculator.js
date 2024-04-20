import React from "react";
import "./Calculator.css";

export default function Calculator(props) {
  if (props.operation) {
    return (
      <div className="Calculator">
        <h5>{props.operation}</h5>
      </div>
    );
  } else {
    return (
      <div className="Calculator">
        <h5>Ready to calculate...</h5>
      </div>
    );
  }
}
