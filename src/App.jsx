import { useState } from 'react'
import './App.css'
import { ContenPages } from './pages/ContenPages'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='bg-gray-800 h-full w-full md:flex  justify-around items-center overflow-hidden bg-center bg-no-repeat bg-cover'
      style={{backgroundImage:`url(https://images.wallpaperscraft.com/image/single/dark_spots_texture_50355_2558x1562.jpg)`}}
    >
      
      <Header/>
      <ContenPages />

    </div>
  )
}

export default App
