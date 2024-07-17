import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

import moduloGeocoding from '../assets/images/galeria/modulo-geocoding.png'
import moduloRH from '../assets/images/galeria/modulo-RH.png'

import embajadorasConvocatorias from '../assets/images/galeria/embajadorasConvocatorias.png'
import loginEmbajadoras from '../assets/images/galeria/login-embajadoras.png'
import registro from '../assets/images/galeria/registro-embajadoras.png'

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
    {id:4, conten:[moduloGeocoding,moduloRH],descripcion:"En estos modulos se crearón para satisfacer las necesidades de la empresa como la administracion del personal y la ubicacion exacta de direcciones utilizando una api de geolocalizaciones  "},

    {id:5, conten:[loginEmbajadoras,embajadorasConvocatorias,registro],descripcion:"Se creo una pagina, administrable con sus propias convocatorias, donde todo su contenido se podia borrar, editar y agregar nuevas "},
   
    {id:1, conten:[pay,pay2,status],descripcion:"He podido integrar pasarelas de pago tanto de mercado libre, Open pay (BBVA) y Red Pay  algunas han sido integradas en php y js , partiendo de un diseño original y propio, simple  y agradable a la vista  "},
    {id:2,conten:[log1,log2,log3,loginEmbajadoras,comp],descripcion:"He crado diferentes Loggins con diseños muy originales, basados en react, html y php; siempre mantenido un diseño original y amigable; además de integrar algunos componentes para aumentar las funcionalidades o el mantenimiento del sitio"},
    {id:3,conten:[sist,sist2,log3],descripcion:"Tambien e trabajado en proyectos de sitemas de registros y afiliaciones que se adaptan a las necesidades del cliente; siempre  colaborando de la mano con este para dar los mejores resultados  "},
   
   
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
        <div key={S.id} >
      <Slider  {...settings} className='slider'>
        {
          S.conten.map((C,index)=>(
          <div key={index} >
            <img src={C} onClick={(e)=>openPicture(C)} alt="imagen1"  />
          </div>
          ))
        }
      </Slider>
      <p >
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