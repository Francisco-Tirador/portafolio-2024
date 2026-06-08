import React, { useState } from 'react'
import Galeria from '../components/Galeria'

import fondoGaleria from '../assets/images/proyectos/galeria.png'
import iconosGaleria from '../assets/images/proyectos/iconosGaleria.png'
import galeriaTitulo from '../assets/images/proyectos/galeriaTitulo.png'

import fondoFigma from '../assets/images/proyectos/figma-fondo.png'
import logoFigma from '../assets/images/proyectos/LOGOTASK.png'
import pestanas from '../assets/images/proyectos/personaje finga.png'

import fondoSAS from '../assets/images/proyectos/fondoSAS.png'
import logoSAS from '../assets/images/proyectos/On Business LOGO.png'
import personajeSAS from '../assets/images/proyectos/obBussnes Personaje.png'

import { IoIosCloseCircle } from "react-icons/io"

const Projects = () => {
  const [gallery, setGalery] = useState(false)
  const [item, setItem] = useState(false)

  const ArrayProyects = [
    {
      id: 49,
      imagenFondo: fondoSAS,
      logo: logoSAS,
      personaje: personajeSAS,
      descripcion: "Punto de venta completo: inventario, ventas, devoluciones, reportes y multisucursal. Creado con React, TypeScript, Node.js, Express y PostgreSQL.",
      titulo: "SAS - Sistema de ventas",
      tag: "2025",
      stack: ['React','TypeScript','Node.js','PostgreSQL'],
      page: "https://onbussines.netlify.app/"
    },
    {
      id: 2,
      imagenFondo: fondoGaleria,
      logo: galeriaTitulo,
      personaje: iconosGaleria,
      descripcion: "Galeria con componentes y proyectos realizados durante mi estancia laboral.",
      titulo: "Galeria Proyectos Laborales",
      tag: "2023-2024",
      stack: ['React','CSS'],
    },
    {
      id: 3,
      imagenFondo: fondoFigma,
      logo: logoFigma,
      personaje: pestanas,
      descripcion: "Propuesta de sistema de administracion de tareas/tickets por empleado con seguimiento.",
      titulo: "Propuesta de diseño",
      tag: "2024",
      stack: ['Figma','UI/UX'],
      page: "https://www.figma.com/design/1Ip8H7b4KUYbQfTTjlm8BP/Untitled?node-id=0-1&t=kecTBfzEAvq9nwuG-1"
    },
  ]

  return (
    <>
      {item && (
        <div className='conten-picture overflow-auto p-2'>
          <IoIosCloseCircle className="w-6 h-6 cursor-pointer text-red-400 bg-gray-800 rounded-md p-1 mr-4 mt-6 sm:mt-0 hover:bg-gray-700 duration-200 absolute top-4 left-4" onClick={() => setItem(false)} />
          <img src={item} className='max-w-fit max-h-full' alt="" />
        </div>
      )}

      <div className='w-full h-full flex flex-col px-4 py-5 overflow-hidden'>
       
        <div className='mb-4 flex-shrink-0'>
          <span className='text-xs font-semibold tracking-widest uppercase' style={{color:'#22c55e'}}>+ PORTFOLIO</span>
          <h2 className='text-white font-black text-2xl lg:text-3xl leading-tight'>
            Proyectos <span style={{color:'#22c55e'}}>Destacados</span>
          </h2>
        </div>

        <Galeria btnClose={() => setGalery(!gallery)} slideOpen={gallery} setPicture={setItem} />

        <div className='flex flex-col gap-3 overflow-y-auto flex-1'>
          {ArrayProyects.map(P => (
            <div key={P.id}
              className='rounded-xl mx-auto w-full my-1 sm:flex duration-300 group max-w-[800px] '
              style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)'}}>

             
              <div className='w-[40%] max-w-[200px] my-auto min-w-[200px] h-[200px] rounded-[10px] relative mx-auto overflow-hidden'>
                <img className='fondoProyect rounded-md duration-500 w-full h-full object-cover' src={P.imagenFondo} alt="" />
                <img className='group-hover:top-[-30px] max-w-[75%] absolute right-0 left-0 top-[90px] m-auto duration-500' src={P.logo} alt="" />
                <img className='group-hover:bottom-[40px] group-hover:opacity-100 h-[160px] absolute m-auto right-0 left-0 bottom-0 opacity-0 duration-500' src={P.personaje} alt="" />
              </div>

            
              <div className='flex flex-col justify-between px-5 py-4 flex-1 min-w-0'>
                <div>
                  <span className='text-[10px] font-bold tracking-widest uppercase' style={{color:'#22c55e'}}>{P.tag}</span>
                  <h3 className='text-white font-bold text-sm leading-tight mb-2 mt-1'>{P.titulo}</h3>
                  <p className='text-gray-400 text-xs leading-relaxed'>{P.descripcion}</p>
                </div>

                <div className='flex items-center justify-between mt-3'>
                  <div className='flex gap-1 flex-wrap'>
                    {P.stack?.map(s => (
                      <span key={s} className='text-[9px] px-2 py-0.5 rounded-full' style={{background:'rgba(34,197,94,0.1)',color:'#4ade80',border:'1px solid rgba(34,197,94,0.15)'}}>{s}</span>
                    ))}
                  </div>
                  <div className='flex gap-2 flex-shrink-0'>
                    {P.id === 2
                      ? <button onClick={() => setGalery(!gallery)} className='text-xs px-3 py-1 rounded-lg font-semibold' style={{background:'#22c55e',color:'#fff'}}>Ver</button>
                      : P.page && <a target='_blank' href={P.page} className='text-xs px-3 py-1 rounded-lg font-semibold' style={{background:'#22c55e',color:'#fff'}}>Ver</a>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
