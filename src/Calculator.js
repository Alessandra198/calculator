import React from "react";

export default function Calculator(props) {
  if (props.operation) {
    return <div className="Calculator">{props.operation}</div>;
  } else {
    return null;
  }
}
