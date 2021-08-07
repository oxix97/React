import React, { useState } from "react";
import "./styles.css";

function Coin() {
  const [result, setResult] = useState("");
  const [nader, setNader] = useState("nader");
  function coinToss() {
    console.log("button Click");
    setNader("");
    Math.random() < 0.5 ? setResult("heads") : setResult("tails");
  }
  return (
    <div className="App">
      <div id="coin" className={result} key={+new Date()}>
        <div class="side-a">
          <h2>TAIL</h2>
        </div>
        <div className="side-b">
          <h2>HEAD</h2>
        </div>
      </div>
      <h1>Flip a coin</h1>
      <button id="btn" onClick={coinToss}>
        Coin Toss
      </button>
    </div>
  );
}

export default Coin;
