import React, { useEffect, useState } from "react";
import { Square } from "./Square";

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const status = "Next player: X";

  useEffect(() => {
     console.log(squares); 
  }, [])

  const renderSquare = (i) => {
    return <Square tgt={i} squares={squares} setSquares={setSquares} />
  };
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};