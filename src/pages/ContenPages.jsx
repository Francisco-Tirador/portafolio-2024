import React, { useMemo, useState, useEffect, useRef } from 'react';
import Presentation from './Presentation';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import { IoRadioButtonOff } from "react-icons/io5";
import { IoMdRadioButtonOn } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";




export const ContenPages = () => {
  const [SliderPrincipal, setSliderPrincipal] = useState(1);
  const [Antes, setAntes] = useState(4);
  const [Lado, setLado] = useState(0);
  const containerRef = useRef(null);

  const arrayComponet = [
    { componente: <Presentation />, id: 1 },
    { componente: <Skills />, id: 2 },
    { componente: <Projects />, id: 3 },
    { componente: <Contact />, id: 4 },
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

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const memoPagesActive = useMemo(() => {
    return arrayComponet.map(componente => (
      <div
        key={componente.id}
        className={`md:px-[30px] lg:py-[20px] rounded-[20px] Resto  page overflow-y-auto flex 
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
    <div ref={containerRef} className='bg-red-40s0 Rotador md:w-[70%] md:h-[90%] relative flex justify-center items-center'>
      <div className='absolute top-0 right-0 z-20 mx-3 my-6'>
      <MdArrowForwardIos onClick={RotacionSuma} className='cursor-pointer my-2 bg-blue-950 w-[40px] h-[30px] hover:bg-secondary duration-200  p-1 rounded-sm' />
      <MdArrowBackIosNew onClick={RotacionResta} className='cursor-pointer my-1 bg-blue-950 w-[40px] h-[30px] hover:bg-secondary duration-200  p-1 rounded-sm' />
      
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
  );
};
