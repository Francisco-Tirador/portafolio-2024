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
import close from '../assets/icon/close.png';

import moduloGeocoding from '../assets/images/galeria/modulo-geocoding.png'
import moduloRH from '../assets/images/galeria/modulo-RH.png'

import embajadorasConvocatorias from '../assets/images/galeria/embajadorasConvocatorias.png'
import loginEmbajadoras from '../assets/images/galeria/login-embajadoras.png'
import registro from '../assets/images/galeria/registro-embajadoras.png'

import registroTamex from '../assets/images/galeria/loginTamex.png'
import loginTamexApp from '../assets/images/galeria/loginTamexApp.png'
import homeDTamex from '../assets/images/galeria/HomeTamexRetail.png'
import homeDarkTamex from '../assets/images/galeria/appTamexDark.png'
import homelighTamex from '../assets/images/galeria/appTamexLigth.png'

const Galeria = ({ btnClose, slideOpen, setPicture }) => {



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const arraySliders = [
    { id: 4, 
      conten: [homeDTamex,registroTamex, homeDarkTamex, homelighTamex, loginTamexApp], 
      descripcion: "Aplicacion multipataforma (web y movil) para ver ventas y reportes en general de los empleados.  (los datos de estas imagenes son ficticios y solo se usan con fines ilustrativos) "
   },
    { id: 4, 
      conten: [moduloGeocoding, moduloRH,registro], 
      descripcion: "En estos módulos se crearon para satisfacer las necesidades de la empresa, como la administración del personal y la ubicación exacta de direcciones utilizando una API de geolocalizaciones.  "
   },
      

    { id: 5, conten: [loginEmbajadoras, embajadorasConvocatorias, registro], descripcion: "Se creó una página, administrable, con sus propias convocatorias, donde todo su contenido se puede borrar, editar y agregar nuevos. " },

    { id: 1, conten: [pay, pay2, status], descripcion: "He podido integrar pasarelas de pago tanto de mercado libre, Open pay (BBVA) y Red Pay  algunas han sido integradas en php y js , partiendo de un diseño original y propio, simple  y agradable a la vista  " },
    { id: 2, conten: [log1, log2, log3, loginEmbajadoras, comp], descripcion: "He creado diferentes Loggins con diseños muy originales, basados en react, html y php; siempre mantenido un diseño original y amigable; además de integrar algunos componentes para aumentar las funcionalidades o el mantenimiento del sitio." },
    // { id: 3, conten: [sist, sist2, log3], descripcion: "También he trabajado en proyectos de sistemas de registros y afiliaciones que se adaptan a las necesidades del cliente, siempre colaborando de la mano con este para dar los mejores resultados.  " },


  ]
  const openPicture = (value) => {
    setPicture(value)
  }
  console.log(slideOpen)

  return (
    <>

      <div className={`bg-gray-50 rounded-t-lg overflow-y-auto absolute w-full z-20 top-[100%] ${slideOpen && "top-[5%]"} duration-200 h-full text-primary`}>
        <header className='bg-primary flex justify-between items-center p-2 sticky top-0 z-10'>
          <h4 className="text-white text-lg grid col font-semibold">GALLERIA DE PROYECTO</h4>

          <img src={close} className='w-6 h-6  cursor-pointer bg-gray-500 rounded-md p-1 sm:mr-4 hover:bg-gray-600 duration-200' onClick={btnClose} />
        </header>

        <div className="p-1 overflow-y-auto">
          {
            arraySliders.map(S => (
              <div key={S.id} className="mb-4 bg-gray-200 shadow-lg border border-gray-300 mx-2 rounded-md px-2 py-3" >
                <Slider  {...settings} className='slider mb-6'>
                  {
                    S.conten.map((C, index) => (
                      <div key={index}  onClick={(e) => openPicture(C)} className='flex justify-center items-center border bg-gray-50 mx-auto'>
                        <div className='mx-auto w-fit'>
                          <img className='max-w-fit ml-32 ' src={C}  alt="imagen1" />
                        </div>
                      </div>
                    ))
                  }
                </Slider>
                <p className="text-justify font-medium p-2 text-sm  rounded-sm md:px-12">
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