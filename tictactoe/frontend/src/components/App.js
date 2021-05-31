import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Board } from './Board'


// FontAwsomeのインポート
/*
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
library.add(fas, far, fal, fad)*/

export const App = () => {
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
