
import './App.css'
import { ContenPages } from './pages/ContenPages'
import Header from './components/Header'

export const urlCuriiculum="https://drive.google.com/file/d/1GMeHLrebGR1XyWsy2LA8G1yNMuIVecFH/view?usp=sharing"

function App() {
  

  return (
    <div className='bg-gray-800 h-full w-full flex overflow-hidden '>

     <div className=' w-full h-full md:flex  justify-around items-center overflow-hiddens  max-w-[1400px] m-auto  max-h-[1000px]'>
        <Header/>
        <ContenPages />
     </div>

    </div>
  )
}

export default App
