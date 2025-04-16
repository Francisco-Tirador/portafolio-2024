import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = ({ alert }) => {
   const { handleSubmit, register, reset } = useForm();
   const [stateBtn, setStateBtn] = useState(false);

   const submitMessage = (data) => {
      setStateBtn(1);

      var fechaActual = new Date();
      var year = fechaActual.getFullYear();
      var month = fechaActual.getMonth() + 1;
      var day = fechaActual.getDate();

      var dateActual = day + "/" + month + "/" + year;

      const dataInfo = {
         date: dateActual,
         ...data,
      };
      const url = "https://65494591dd8ebcd4ab246ccd.mockapi.io/api/v1/comentarios";
      axios
         .post(url, dataInfo)
         .then((res) => {
            alert({
               message: "¡Gracias por ponerte en contacto! Te contestaré muy pronto. 😎👌",
               type: "success",
            });
            reset({
               message: "",
            });
            setStateBtn(2);
            setTimeout(() => {
               setStateBtn(false);
            }, 5000);
         })
         .catch((res) => {
            setStateBtn(false);
         });
   };

   return (
      <>
         <div className="flex flex-wrap justify-center items-center mx-auto">
            <h2 className="apt FirstText text-third">Contacto</h2>
            <div className="ContenForm inline-block bg-gray-300 mt-5 w-[100%] rounded-md ">
            <h3 className="text-start ml-12  text-third my-3 text-xl font-medium">¡Hablemos sobre de tu idea!</h3>

               <form onSubmit={handleSubmit(submitMessage)} id="formContacto" >
                  <label htmlFor="" className="text-secondary text-md text-start font-bold ml-[11%] ">Nombre</label>

                  <span className="relative">
                     <FaUserCircle className="absolute bottom-[2px] left-[20px] text-secondary" />
                     <input type="text" placeholder="Nombre" required className="text-black" {...register("nombre")} />
                  </span>
                  <label className="text-secondary text-md text-start font-bold ml-[11%] ">Correo</label>
                  <span className="relative ">
                     <MdEmail className="absolute bottom-[2px] left-[20px] text-secondary" />
                     <input type="email" placeholder="example@example.com" required className="text-black" {...register("email")} />
                  </span>

                  <textarea {...register("message")} name="message" className="text-black bg-gray-50" cols="30" rows="10" placeholder="Escribe tu mensaje" required></textarea>
               </form>
               <button className="bg-secondary px-12 py-2 rounded-md mr-auto" form="formContacto">
                  {!stateBtn ? (
                     "Enviar"
                  ) : stateBtn == 1 ? (
                     <span className="material-symbols-outlined ">
                        <FaArrowsRotate className="rotate" />
                     </span>
                  ) : (
                     <FaCheckCircle />
                  )}
               </button>
            </div>
         </div>
      </>
   );
};

export default Contact;
