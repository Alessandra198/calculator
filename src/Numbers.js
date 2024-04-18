import React from "react";
import "./Numbers.css";

export default function Numbers() {
  return (
    <div className="Numbers">
      <div className="row ">
        <div className="col-3">7</div>
        <div className="col-3">8</div>
        <div className="col-3">9</div>
        <div className="col-3">x</div>
      </div>
      <div className="row">
        <div className="col-3">4</div>
        <div className="col-3">5</div>
        <div className="col-3">6</div>
        <div className="col-3">-</div>
      </div>
      <div className="row">
        <div className="col-3">1</div>
        <div className="col-3">2</div>
        <div className="col-3">3</div>
        <div className="col-3">+</div>
      </div>
      <div className="row">
        <div className="col-3">00</div>
        <div className="col-3">0</div>
        <div className="col-3">,</div>
        <div className="col-3">=</div>
      </div>
    </div>
  );
}
