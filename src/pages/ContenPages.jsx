import React, { useMemo, useState, useEffect, useRef } from "react";
import Presentation from "./Presentation";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import { IoRadioButtonOff } from "react-icons/io5";
import { IoMdRadioButtonOn } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import flecha from "../assets/images/flecha.png";
import { useForm } from "react-hook-form";

export const ContenPages = () => {
   const [SliderPrincipal, setSliderPrincipal] = useState(1);
   const [Antes, setAntes] = useState(4);
   const [recordatorio, setRecordatorio] = useState(false);
   const [Lado, setLado] = useState(0);
   const [bodyToast, setBodyToast] = useState({});
   const containerRef = useRef(null);

   const { handleSubmit, register } = useForm();

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

   const recordatoriAceptado = (data) => {
      if (data.noRecordar) {
         localStorage.setItem("recordarTip", false);
      }
      setRecordatorio(false);
      setBodyToast({
        message: " Bienvenido a mi portafolio ✌️😎",
     });
   };

   useEffect(() => {
      const recordatorioStorage = localStorage.getItem("recordarTip");
      if (recordatorioStorage != "false") {
         setRecordatorio(true);
      }else{
        setBodyToast({
          message: " Bienvenido a mi portafolio ✌️😎",
       });
      }

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
            className={`py-3 md:px-[30px] lg:py-[20px]  rounded-[20px] Resto  page overflow-y-auto flex 
            ${SliderPrincipal === componente.id && Lado === 0 ? " RotaX" : SliderPrincipal === componente.id && Lado === 1 ? " RotaY" : Antes === componente.id && Lado === 0 ? "Rota" : Antes === componente.id && Lado === 1 ? " Rota RotacionRegreso" : "hidden "}`}
         >
            {componente.componente}
         </div>
      ));
   }, [SliderPrincipal]);


   
   return (
      <>
         <div className={` absolute w-full h-full bg-[#0000007d] z-[60] ${!recordatorio && "hidden"}`}>
            <div className="absolute right-0 mr-[18%] md:mr-[10%] mt-[20px]">
               <img src={flecha} className="ml-auto w-[25%]" alt="" />
               <div className="bg-white text-black ml-auto w-[80%] md:w-[60%] pt-3 rounded-md">
                  <p className="mx-1">Recuerda que puedes cambiar de pestaña con estos botones 😊👍</p>
                  <form onSubmit={handleSubmit(recordatoriAceptado)} className="bg-secondary py-1 flex justify-around items-center">
                     <span>
                        <label htmlFor="jamas" className="text-black">
                           Ya no recordar
                        </label>
                        <input type="checkbox" className="ml-2" {...register("noRecordar")} />
                     </span>
                     <button className="btn-secundario">Aceptar</button>
                  </form>
               </div>
            </div>
         </div>
         <ToastContainer />

         <div ref={containerRef} className="bg-red-40s0 Rotador w-[90%] mx-auto mt-auto md:mt-0 md:w-[70%] h-[90%] relative flex justify-center items-center ">
            <div className="absolute top-0 right-0 z-[60] sm:mx-3 my-6 w-[100%] sm:w-auto bg-resd-100 flex sm:block justify-between items-center ml">
               <MdArrowBackIosNew onClick={RotacionResta} className="cursor-pointer my-1 bg-secondary w-[40px] h-[30px] text-black hover:bg-black hover:text-secondary duration-200  p-1 rounded-sm" />
               <MdArrowForwardIos onClick={RotacionSuma} className="cursor-pointer my-2 bg-secondary w-[40px] h-[30px] text-black hover:bg-black hover:text-secondary duration-200  p-1 rounded-sm" />
            </div>

            {memoPagesActive}

            <div className="absolute bottom-0 bg-red-60s0   w-full flex justify-center items-center">{arrayComponet.map((p) => (SliderPrincipal == p.id ? <IoMdRadioButtonOn color="rgb(180 205 2)" className="w-6 h-6" /> : <IoRadioButtonOff />))}</div>
         </div>
      </>
   );
};
