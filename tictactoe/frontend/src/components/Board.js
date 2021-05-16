import React, { useEffect, useState } from 'react'
import { Square } from './Square'
import styled from 'styled-components'

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [status, setStatus] = useState('Next player: You')
  const [xIsNext, setXIsNext] = useState(true)
  const [winner, setWinner] = useState(null)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  useEffect(() => {
    setWinner(calculateWinner(squares))
    // ここ上手く動かないかも
    if (calculateWinner(squares)) {
      setStatus('Winner: ' + winner)
    } else {
      setStatus('Next player: ' + (xIsNext ? 'You' : 'CPU'))
    }
  })

  useEffect(() => {
    if (!xIsNext) {
      // ここで計算処理
    }
  }, [xIsNext])

  const renderSquare = (i) => {
    return (
      <Square
        tgt={i}
        squares={squares}
        setSquares={setSquares}
        xIsNext={xIsNext}
        setXIsNext={setXIsNext}
        winner={winner}
      />
    )
  }
  return (
    <div>
      <div className="status">{status}</div>
      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>
      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>
      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>
    </div>
  )
}

const BoardRow = styled.div`
  display: flex;
`
