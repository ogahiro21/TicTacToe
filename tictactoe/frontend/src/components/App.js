import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Board } from './Board'

export const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const boardBody = useRef(null)
  useEffect(() => {
    boardBody.current.style.height = window.innerHeight + 'px'
  }, [])
  useEffect(() => {}, [])
  return (
    <Body ref={boardBody}>
      <Board />
    </Body>
  )
}
const Body = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #56baac;
  font-family: 'Noto Sans JP', sans-serif;
  display: flex;
  justify-content: center;
`

ReactDOM.render(<App />, document.getElementById('app'))
