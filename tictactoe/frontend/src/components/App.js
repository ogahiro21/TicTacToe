import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {Board} from './Board'

export const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  useEffect(() => {

    }, [])
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
