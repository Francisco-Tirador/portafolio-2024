import React from 'react'
import Yo from '../assets/images/yo2025.png'
import { urlCuriiculum } from '../App'

const Presentation = () => {
  return (
    <div className='sm:flex flex-wrap justify-center items-center h-full px-4 py-6 gap-6 overflow-y-auto'>

    
      <div className='flex justify-center sm:w-[40%]'>
        <div className='relative'>
          <div className='absolute inset-0 rounded-2xl' style={{boxShadow:'0 0 60px rgba(34,197,94,0.25)',borderRadius:'16px'}}/>
          <img className='relative z-10 rounded-2xl max-h-[330px] w-auto mx-auto' style={{border:'1px solid rgba(34,197,94,0.25)'}} src={Yo} alt="Francisco Beltran" />
        </div>
      </div>

      <div className='sm:w-[55%] flex flex-col gap-4'>
        <div>
          <span className='text-xs font-semibold tracking-widest uppercase' style={{color:'#22c55e'}}>+ SOBRE MI</span>
          <h1 className='text-white font-black text-3xl lg:text-4xl leading-tight mt-1'>
            Hola, soy<br/><span style={{color:'#22c55e'}}>Francisco</span> Beltran
          </h1>
          <p className='text-gray-400 text-xs font-medium tracking-wider uppercase mt-1'>Full Stack Developer & Graphic Designer</p>
        </div>

        <p className='text-gray-300 text-sm lg:text-base leading-relaxed'>
          Tecnico en <span className='text-white font-medium'>diseño grafico</span> y <span className='text-white font-medium'>programador Full Stack</span>. Apasionado por crear experiencias digitales que combinan funcionalidad y estetica. Pongo mis servicios a tu disposicion para llevar tu negocio al siguiente nivel online.
        </p>

       
        <div className='flex flex-wrap gap-2'>
          {['Web Apps','Mobile','UI/UX Design','Backend'].map(tag=>(
            <span key={tag} className='text-xs px-3 py-1 rounded-full font-medium' style={{background:'rgba(34,197,94,0.1)',color:'#4ade80',border:'1px solid rgba(34,197,94,0.2)'}}>
              + {tag}
            </span>
          ))}
        </div>

        <a href={urlCuriiculum} target='_blank'>
          <button className='btn-secundario inline-flex items-center gap-2'>
            Descargar Curriculum
          </button>
        </a>
      </div>
    </div>
  )
}

export default Presentation
