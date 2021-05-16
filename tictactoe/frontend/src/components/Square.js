import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const Square = ({
  tgt,
  squares,
  setSquares,
  xIsNext,
  setXIsNext,
  winner,
}) => {
  const handleClick = (tgt, squares) => {
    if (xIsNext && !winner) {
      const swap = [...squares]
      swap[tgt] = 'X'
      setSquares(swap)
      setXIsNext(false)
    }
  }
  return (
    <Sq className="square" onClick={() => handleClick(tgt, squares)}>
      {squares[tgt]}
    </Sq>
  )
}

const Sq = styled.div`
  width: 2rem;
  height: 2rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`
