import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComidasFavoritas from './components/ComidasFavoritas'
import Filmes from './components/Filmes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Filmes></Filmes>
    </>
  )
}

export default App
