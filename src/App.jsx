import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContenPages } from './pages/ContenPages'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-800 h-full w-full md:flex  justify-around items-center overflow-hidden'>
      
      <Header/>
      <ContenPages />

    </div>
  )
}

export default App
