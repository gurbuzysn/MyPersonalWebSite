import { useState } from 'react'
import './App.css'
import Header from './Components/header/Header'
import Intro from './Components/intro/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro/>
    </>
  )
}

export default App
