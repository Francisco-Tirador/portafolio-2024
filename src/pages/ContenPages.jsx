import React, { useMemo, useState, useEffect, useRef } from 'react';
import Presentation from './Presentation';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import { IoRadioButtonOff } from "react-icons/io5";
import { IoMdRadioButtonOn } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { set } from 'react-hook-form';




export const ContenPages = () => {
  const [SliderPrincipal, setSliderPrincipal] = useState(1);
  const [Antes, setAntes] = useState(4);
  const [Lado, setLado] = useState(0);
  const [bodyToast, setBodyToast] = useState({});
  const containerRef = useRef(null);

  
  useEffect(() => {
    if(bodyToast.message){
     ( bodyToast?.type?toast[bodyToast?.type]:toast)(bodyToast.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  }, [bodyToast])
  

  const arrayComponet = [
    { componente: <Presentation />, id: 1 },
    { componente: <Skills />, id: 2 },
    { componente: <Projects />, id: 3 },
    { componente: <Contact alert={setBodyToast}/>, id: 4 },
  ];

  const RotacionSuma = () => {
    setLado(1);
    if (SliderPrincipal === 4) {
      setAntes(SliderPrincipal);
      setSliderPrincipal(1);
    } else {
      setAntes(SliderPrincipal);
      setSliderPrincipal(SliderPrincipal + 1);
    }
  };

  const RotacionResta = () => {
    setLado(0);
    if (SliderPrincipal === 1) {
      setAntes(SliderPrincipal);
      setSliderPrincipal(4);
    } else {
      setAntes(SliderPrincipal);
      setSliderPrincipal(SliderPrincipal - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const boxWidth = containerRef.current.offsetWidth;
        document.documentElement.style.setProperty('--medida-traslacion', `${boxWidth / 2}px`);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

   window.removeEventListener('resize', handleResize);

  //  setBodyToast({
  //   message:"💚 Bienvenido a mi portafolio 💚❤️‍🔥", 
  //  })
  }, []);


  const memoPagesActive = useMemo(() => {
    return arrayComponet.map(componente => (
      <div
        key={componente.id}
        className={`py-3 md:px-[30px] lg:py-[20px]  rounded-[20px] Resto  page overflow-y-auto flex 
            ${
                    SliderPrincipal === componente.id && Lado === 0 ? ' RotaX' :
                    SliderPrincipal === componente.id && Lado === 1 ? ' RotaY' :
                    Antes === componente.id && Lado === 0 ? 'Rota' :
                    Antes === componente.id && Lado === 1 ? ' Rota RotacionRegreso' :
                    'hidden '
            }`
        }
      >
        {componente.componente}
      </div>
    ));
  }, [SliderPrincipal]);

  
  return (
   
 <>
  <ToastContainer />
    <div ref={containerRef} className='bg-red-40s0 Rotador w-[90%] mx-auto mt-auto md:mt-0 md:w-[70%] h-[90%] relative flex justify-center items-center '>
      <div className='absolute top-0 right-0 z-20 sm:mx-3 my-6 w-[100%] sm:w-auto bg-resd-100 flex sm:block justify-between items-center ml'>
      <MdArrowBackIosNew onClick={RotacionResta} className='cursor-pointer my-1 bg-blue-950 w-[40px] h-[30px] hover:bg-secondary duration-200  p-1 rounded-sm' />
      <MdArrowForwardIos onClick={RotacionSuma} className='cursor-pointer my-2 bg-blue-950 w-[40px] h-[30px] hover:bg-secondary duration-200  p-1 rounded-sm' />
      
      </div>

        {memoPagesActive}

        <div className='absolute bottom-0 bg-red-60s0   w-full flex justify-center items-center'>
          {
            arrayComponet.map(p=>(
                SliderPrincipal==p.id?<IoMdRadioButtonOn color='#1eba0a' className='w-6 h-6'/>:<IoRadioButtonOff/>
            ))
          }
        </div>
    </div>
 </>
  );
};
