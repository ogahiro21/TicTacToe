import React, { useEffect, useState } from "react";

export const Square = ({ tgt, squares, setSquares }) => {

  const handleClick = (tgt, squares) => {
    const swap = [...squares]
    swap[tgt] = 'X'
    setSquares(swap)
  }
  return (
    <button
      className="square"
      onClick={() => handleClick(tgt, squares)}
    >
      {squares[tgt]}
    </button>
  )
}
