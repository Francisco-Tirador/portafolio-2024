import React, { useMemo, useState, useEffect, useRef } from 'react';
import Presentation from './Presentation';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

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
        className={`md:px-[30px] md:py-[20px] rounded-md Resto  page overflow-y-auto
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
    <div ref={containerRef} className=' Rotador md:w-[70%] md:h-[90%]'>
      <button onClick={RotacionSuma}>suma</button>
      <button onClick={RotacionResta}>resta</button>
      {memoPagesActive}
    </div>
  );
};
