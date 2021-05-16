import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

export const Square = ({
  tgt,
  squares,
  setSquares,
  xIsNext,
  setXIsNext,
  winner,
}) => {
  const handleClick = (tgt, squares) => {
    axios
      .get('api/teest')
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.response)
      })
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
