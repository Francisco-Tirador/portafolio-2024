import React, { useMemo, useState, useEffect, useRef } from "react";
import Presentation from "./Presentation";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";


import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const ContenPages = () => {
   const [SliderPrincipal, setSliderPrincipal] = useState(1);
   const [Antes, setAntes] = useState(4);
   const [Lado, setLado] = useState(0);
   const [bodyToast, setBodyToast] = useState({});
   const containerRef = useRef(null);

  
   useEffect(() => {
      if (bodyToast.message) {
         (bodyToast?.type ? toast[bodyToast?.type] : toast)(bodyToast.message, {
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
   }, [bodyToast]);

   const arrayComponet = [
      { componente: <Presentation />, id: 1 },
      { componente: <Skills />, id: 2 },
      { componente: <Projects />, id: 3 },
      { componente: <Contact alert={setBodyToast} />, id: 4 },
   ];

  
   useEffect(() => {

      const handleResize = () => {
         if (containerRef.current) {
            const boxWidth = containerRef.current.offsetWidth;
            document.documentElement.style.setProperty("--medida-traslacion", `${boxWidth / 2}px`);
         }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      window.removeEventListener("resize", handleResize);
   }, []);



   const memoPagesActive = useMemo(() => {
      return arrayComponet.map((componente) => (
         <div
            key={componente.id}
            className={`pt-2 pb-4 Resto page overflow-hidden flex
            ${SliderPrincipal === componente.id && Lado === 0 ? " RotaX" : SliderPrincipal === componente.id && Lado === 1 ? " RotaY" : Antes === componente.id && Lado === 0 ? "Rota" : Antes === componente.id && Lado === 1 ? " Rota RotacionRegreso" : "hidden "}`}
         >
            {componente.componente}
         </div>
      ));
   }, [SliderPrincipal]);



   const tabLabels = ['Sobre mi', 'Habilidades', 'Proyectos', 'Contacto'];
   const activeIdx = SliderPrincipal - 1;

   const navigate = (id) => { setLado(id > SliderPrincipal ? 1 : 0); setAntes(SliderPrincipal); setSliderPrincipal(id); };

   return (
      <>
         <ToastContainer />

         {/* Wrapper externo: posiciona tabs+dots encima del Rotador sin que overflow los corte */}
         <div className="w-[95%] mx-auto md:w-[73%] h-[90%] relative flex flex-col">

            {/* Tab nav con pill deslizante — FUERA del Rotador */}
            <div className="flex justify-center pt-3 pb-2 z-[60] flex-shrink-0">
               <div className="relative flex p-1 rounded-xl" style={{background:'rgba(255,255,255,0.04)',backdropFilter:'blur(12px)',border:'1px solid rgba(255,255,255,0.07)'}}>
                  {/* Pill deslizante */}
                  <div
                     className="absolute top-1 bottom-1 rounded-lg pointer-events-none"
                     style={{
                        width:`calc(${100/tabLabels.length}% - 2px)`,
                        left:`calc(${activeIdx * (100/tabLabels.length)}% + 1px)`,
                        background:'#22c55e',
                        boxShadow:'0 4px 16px rgba(34,197,94,0.45)',
                        transition:'left 0.38s cubic-bezier(0.4,0,0.2,1)',
                     }}
                  />
                  {tabLabels.map((label, i) => {
                     const id = i + 1;
                     return (
                        <button
                           key={id}
                           onClick={() => navigate(id)}
                           className="relative z-10 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide"
                           style={{
                              color: SliderPrincipal === id ? '#fff' : '#6b7280',
                              transition:'color 0.3s ease',
                              background:'transparent',
                              minWidth:'70px',
                           }}
                        >
                           {label}
                        </button>
                     );
                  })}
               </div>
            </div>

            {/* Rotador con overflow:hidden para que el slide quede dentro */}
            <div ref={containerRef} className="Rotador relative flex-1 flex justify-center items-center" style={{overflow:'hidden',borderRadius:'20px'}}>
               {memoPagesActive}
            </div>

            {/* Dots con animacion — FUERA del Rotador */}
            <div className="flex justify-center items-center gap-2 py-2 flex-shrink-0">
               {arrayComponet.map((p) => (
                  <span
                     key={p.id}
                     onClick={() => navigate(p.id)}
                     className="cursor-pointer rounded-full block"
                     style={{
                        background: SliderPrincipal === p.id ? '#22c55e' : 'rgba(255,255,255,0.2)',
                        width: SliderPrincipal === p.id ? '20px' : '6px',
                        height: '6px',
                        transition: 'width 0.38s cubic-bezier(0.4,0,0.2,1), background 0.3s ease',
                     }}
                  />
               ))}
            </div>
         </div>
      </>
   );
};
