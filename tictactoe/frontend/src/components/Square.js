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
  const handleClick = (tgt, squares, winner) => {
    if(!squares[tgt]){
      if (xIsNext && !winner) {
        const swap = [...squares]
        swap[tgt] = 'X'
        setSquares(swap)
        setXIsNext(false)
      }
    }
  }
  return (
    <Sq className="square" onClick={() => handleClick(tgt, squares, winner)}>
      {squares[tgt]}
    </Sq>
  )
}

const Sq = styled.div`
  box-sizing: border-box;
  border: 3px solid #489f92;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`
