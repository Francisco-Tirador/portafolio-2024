import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import yo from '../assets/images/yo.jpg'
import log1 from '../assets/images/galeria/loggin1.png'
import log2 from '../assets/images/galeria/login2.png'
import comp from '../assets/images/galeria/componente.png'
import pay from '../assets/images/galeria/pago.png'
import sist from '../assets/images/galeria/sistema.png'
import sist2 from '../assets/images/galeria/sistemaAc.png'
import pay2 from '../assets/images/galeria/pago2.png'
import status from '../assets/images/galeria/status.png'
import log3 from '../assets/images/galeria/login3.png'
import close  from '../assets/icon/close.png';

const Galeria = ({btnClose,slideOpen,setPicture}) => {
 


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // El ancho de la pantalla en el que se activará esta configuración
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const arraySliders=[
    {id:1, conten:[pay,pay2,status],descripcion:"He podido integrar pasarelas de pago tanto de mercado libre, Open pay (BBVA) y Red Pay  algunas han sido integradas en php y js , partiendo de un diseño original y propio, simple  y agradable a la vista  "},
    {id:2,conten:[log1,log2,log3,comp],descripcion:"He crado diferentes Loggins con diseños muy originales, basados en react, html y php; siempre mantenido un diseño original y amigable; además de integrar algunos componentes para aumentar las funcionalidades o el mantenimiento del sitio"},
    {id:3,conten:[sist,sist2,log3],descripcion:"Tambien e trabajado en proyectos de sitemas de registros y afiliaciones que se adaptan a las necesidades del cliente; siempre  colaborando de la mano con este para dar los mejores resultados  "}
  ]
  const openPicture=(value)=>{
    setPicture(value)
  }


  return (
    <>
   
    <div className={`ContenGallery ${slideOpen&&"openSlide"}`}>
      <header className='headerGallery'>
        <h4>GALLERIA DE PROYECTO</h4>
       
        <img src={close} className='btn-close' onClick={btnClose} />
      </header>

      <div>
     {
      arraySliders.map(S=>(
        <div >
         <Slider key={S.id} {...settings} className='slider'>
        {
          S.conten.map((C,index)=>(
          <div key={index}>
            <img src={C} onClick={(e)=>openPicture(C)} alt="imagen1" />
          </div>
          ))
        }
      </Slider>
      <p key={S.id}>
        {
          S.descripcion
        }
      </p>
        </div>
      ))
     }
      </div>

    </div>
    </>
  )
}
export default Galeria