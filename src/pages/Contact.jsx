import React, { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaCheckCircle } from "react-icons/fa"
import { FaArrowsRotate } from "react-icons/fa6"
import { useForm } from "react-hook-form"
import axios from "axios"

const Contact = ({ alert }) => {
  const { handleSubmit, register, reset } = useForm()
  const [stateBtn, setStateBtn] = useState(false)

  const submitMessage = (data) => {
    setStateBtn(1)
    var d = new Date()
    const dataInfo = { date: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`, ...data }
    axios.post("https://65494591dd8ebcd4ab246ccd.mockapi.io/api/v1/comentarios", dataInfo)
      .then(() => {
        alert({ message: "Gracias por contactarme! Te respondere muy pronto.", type: "success" })
        reset({ message: "" })
        setStateBtn(2)
        setTimeout(() => setStateBtn(false), 5000)
      })
      .catch(() => setStateBtn(false))
  }

  return (
    <div className='w-full h-full flex flex-col px-4 py-5'>
    
      <div className='mb-5 flex-shrink-0'>
        <span className='text-xs font-semibold tracking-widest uppercase' style={{color:'#22c55e'}}>+ CONTACTO</span>
        <h2 className='text-white font-black text-2xl lg:text-3xl leading-tight'>
          Hablemos de<br/><span style={{color:'#22c55e'}}>tu proyecto</span>
        </h2>
      </div>

      <div className='flex-1 rounded-xl p-5 overflow-y-auto max-w-screen-md mx-auto w-full bg-[#00000065]'>
        <form onSubmit={handleSubmit(submitMessage)} id="formContacto" className='flex flex-col gap-4 '>

         
          <div className='flex flex-col gap-1'>
            <label className='text-xs text-start font-semibold tracking-wider uppercase' style={{color:'#4ade80'}}>Nombre</label>
            <div className='relative'>
              <FaUserCircle className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm'/>
              <input
                type="text" placeholder="Tu nombre" required
                className='w-full pl-9 pr-4 py-2.5 rounded-xl text-sm text-gray-200 outline-none transition-all'
                style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)',caretColor:'#22c55e'}}
                onFocus={e=>e.target.style.borderColor='rgba(34,197,94,0.5)'}
                onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.08)'}
                {...register("nombre")}
              />
            </div>
          </div>

         
          <div className='flex flex-col gap-1'>
            <label className='text-xs text-start font-semibold tracking-wider uppercase' style={{color:'#4ade80'}}>Correo</label>
            <div className='relative'>
              <MdEmail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm'/>
              <input
                type="email" placeholder="tu@correo.com" required
                className='w-full pl-9 pr-4 py-2.5 rounded-xl text-sm text-gray-200 outline-none transition-all'
                style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)',caretColor:'#22c55e'}}
                onFocus={e=>e.target.style.borderColor='rgba(34,197,94,0.5)'}
                onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.08)'}
                {...register("email")}
              />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-xs font-semibold tracking-wider uppercase' style={{color:'#4ade80'}}>Mensaje</label>
            <textarea
              {...register("message")} name="message" rows="4" placeholder="Describe tu idea o proyecto..." required
              className='w-full px-4 py-3 rounded-xl text-sm text-gray-200 outline-none transition-all resize-none'
              style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)',caretColor:'#22c55e'}}
              onFocus={e=>e.target.style.borderColor='rgba(34,197,94,0.5)'}
              onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.08)'}
            />
          </div>

          <button
            form="formContacto"
            className='py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2'
            style={{background:'#22c55e',color:'#fff',boxShadow:'0 8px 24px rgba(34,197,94,0.3)'}}
            onMouseEnter={e=>e.currentTarget.style.background='#16a34a'}
            onMouseLeave={e=>e.currentTarget.style.background='#22c55e'}
          >
            {!stateBtn
              ? <>Enviar mensaje <span>→</span></>
              : stateBtn === 1
                ? <FaArrowsRotate className="rotate"/>
                : <><FaCheckCircle/> Enviado</>
            }
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
