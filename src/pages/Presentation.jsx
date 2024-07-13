import React from 'react'
import Yo from '../assets/images/yo.jpg'

const Presentation = () => {
  return (
    <div className='md:flex flex-wrap justify-center items-center'>

    <div className='w-1/2 my-auto '><img className='md:w-[80%] m-auto rounded-md' src={Yo} alt="" /></div>

       <div className='w-1/2 flex justify-center items-center flex-wrap'>
       <h2 className='apt FirstText '>Sobre mi</h2>
        <p className='md:text-[10px] lg:text-lg px-3'>
        Hola, soy <b >Francisco Beltrán</b>, <b className='text-important'>técnico en diseño gráfico y Programador Full stack</b> , amante de la programación,
         tecnología, diseño, ilustración y el dibujo en general; pongo mis servicios a tu disposición como diseñador y programador de <b className='text-important'>páginas web y aplicaciones mobiles </b>
         para ayudarte con algún pequeño proyecto de llevar la presentación de tu negocio o artículos al siguiente nivel online.
            <br />
        Saludos !!!
        </p>
    
        <a href='https://drive.google.com/file/d/1TX0lguraXb1gXzgaT7yn0oT0QoIzYH4U/view?usp=sharing' target='_blank' >
          <button className='btn-secundario  '>
          DESCARGAR CURRÍCULUM
          </button>
        </a>
       </div>
    </div>
  )
}

export default Presentation