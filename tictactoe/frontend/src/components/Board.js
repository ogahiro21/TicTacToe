import React, { useEffect, useState } from 'react'
import { Square } from './Square'
import styled from 'styled-components'
import axios from 'axios'

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
    for (let i = 0; i < 9; i++) {
      if (squares[i] == null) {
        return null
      }
    }
    return 'draw'
  }

  useEffect(() => {
    setWinner(calculateWinner(squares))
    if (winner != 'draw' && winner != null) {
      setStatus('Winner: ' + winner)
    } else if (winner) {
      setStatus('Draw')
    } else {
      setStatus('Next player: ' + (xIsNext ? 'You' : 'CPU'))
    }
  })

  useEffect(() => {
    if (!xIsNext && !calculateWinner(squares)) {
      // ここで計算処理
      axios
        .post('api/cpu/', squares)
        .then((res) => {
          setSquares(res.data)
          setXIsNext(true)
        })
        .catch((error) => {
          console.log(error.response)
        })
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
    <Body>
      <StatusBar>{status}</StatusBar>
      <GameBoard>
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
      </GameBoard>
      <TurnSelector>
        <Btn
          onClick={() => {
            setXIsNext(true)
            setSquares(Array(9).fill(null))
          }}
        >
          先攻
        </Btn>
        <Btn
          onClick={() => {
            setXIsNext(null)
            setSquares(Array(9).fill(null))
            setXIsNext(false)
          }}
        >
          後攻
        </Btn>
      </TurnSelector>
    </Body>
  )
}

const Body = styled.div`
  width: 14rem;
`

const StatusBar = styled.div`
  color: #2d3b39;
  text-align: center;
  padding: 1rem 0;
  user-select: none;
`

const GameBoard = styled.div`
  overflow: hidden;
  height: 14rem;
`

const BoardRow = styled.div`
  display: flex;
  width: 100%;
  height: 33%;
`

const TurnSelector = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
`

const Btn = styled.div`
  &:first-child {
    margin-right: 0.5rem;
  }
  &:last-child {
    margin-left: 0.5rem;
  }
  flex: 1;
  text-align: center;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background: #489f92;
  border-radius: 4px;
  padding: 0.5rem;
  transition: 0.3s ease-in-out;
  user-select: none;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`
