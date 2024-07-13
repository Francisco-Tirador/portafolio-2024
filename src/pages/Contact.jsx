import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';





const Contact = () => {

    const { handleSubmit, register, reset } = useForm()
    const [stateBtn,setStateBtn]=useState(false)
  
  
    const submitMessage=(data)=>{
        setStateBtn(1)
  
      var fechaActual = new Date();
      var year = fechaActual.getFullYear();
      var month = fechaActual.getMonth() + 1; 
      var day = fechaActual.getDate();
      
      var dateActual = day + '/' + month + '/' + year;
      
      const dataInfo={
        date:dateActual,
        ...data
      };
      const url="https://65494591dd8ebcd4ab246ccd.mockapi.io/api/v1/comentarios";
      axios.post(url,dataInfo)
        .then(res=>{
          // toast("Mensaje enviado, muchas gracias por contactarme")
          reset({
            message:""
          })
          setStateBtn(2)
          setTimeout(() => {
            setStateBtn(false);
          }, 5000);

          toast('🦄 Wow so easy!', {
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
        })
        .catch(res=>{
          setStateBtn(false)
        })
  
    }
  
  
    return (
      <>
  
  <ToastContainer />
      <div className='flex flex-wrap justify-center items-center mx-auto'>
        
        <h2 className='apt FirstText'>Contacto</h2>
        <div className='ContenForm mt-5 w-[100%] '>
          <h3 className='textPrincipal textForm'>¡Hablemos sobre de tu idea!</h3>
          <form  onSubmit={handleSubmit(submitMessage)} id='formContacto'>
            <label htmlFor="">Nombre</label>
  
            <span className='relative'>
              <FaUserCircle className='absolute bottom-[2px] left-[20px] text-important'/>
              <input type="text" placeholder='Nombre' required className='text-black' {...register("nombre")}/>
            </span>
            <label htmlFor="">Correo</label>
            <span className='relative'>
           
            <MdEmail  className='absolute bottom-[2px] left-[20px] text-important'/>
            <input type="email" placeholder='example@example.com' required className='text-black' {...register("email")}/>
            </span>
            
            <textarea {...register("message")} name="message" className='text-black' cols="30" rows="10" placeholder='Escribe tu mensaje' required>
  
            </textarea>
            
          </form>
          <button className='btn ' form='formContacto'>
            {
              !stateBtn?
              "Enviar":
              stateBtn==1?
              <span class="material-symbols-outlined rotate">
              <FaArrowsRotate/>
              </span>:
              <FaCheckCircle/>
            }
          </button>
        </div>
  
  
  
      </div>
      </>
    )
  }

export default Contact