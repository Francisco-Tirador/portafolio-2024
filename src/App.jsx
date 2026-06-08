
import './App.css'
import { ContenPages } from './pages/ContenPages'
import Header from './components/Header'

export const urlCuriiculum="https://drive.google.com/file/d/1GMeHLrebGR1XyWsy2LA8G1yNMuIVecFH/view?usp=sharing"

function App() {
  

  return (
    <div className='h-full w-full flex overflow-hidden relative' style={{background:'#080c10'}}>
      {/* Luces animadas */}
      <div className='bg-light bg-light-1'/>
      <div className='bg-light bg-light-2'/>
      <div className='bg-light bg-light-3'/>
      {/* Grid sutil */}
      <div className='absolute inset-0 pointer-events-none opacity-[0.025]' style={{backgroundImage:'linear-gradient(rgba(34,197,94,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(34,197,94,0.6) 1px,transparent 1px)',backgroundSize:'60px 60px'}}/>

      <div className='w-full h-full md:flex justify-around items-center max-w-[1400px] m-auto max-h-[1000px] relative z-10'>
        <Header/>
        <ContenPages />
      </div>
    </div>
  )
}

export default App
