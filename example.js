import React from 'react'
import { render } from 'react-dom'
import useWindowScrollPosition from './'

function App() {
  let position = useWindowScrollPosition()
  return (
    <div
      style={{
        position: position.x === 0 ? 'fixed' : 'absolute', // is on top
      }}
    />
  )
}

render(<App />, window.root)
