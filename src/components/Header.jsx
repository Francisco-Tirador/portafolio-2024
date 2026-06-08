import React, { useState } from 'react'
import logo from '../assets/images/logo2025.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from 'react-icons/io';
import pdf from '../assets/FranciscoB.pdf'
import { urlCuriiculum } from '../App';




const Header = () => {
  const [popMenu, setPopMenu] = useState(false)



  return (
    <>
     
      <div
        className='hidden md:flex flex-col md:w-[22%] md:max-w-[280px] md:h-[90%] md:mx-4 rounded-2xl z-50 overflow-hidden'
        style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(34,197,94,0.15)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}
      >
      
        <div className='h-[3px] w-full' style={{background:'linear-gradient(90deg,transparent,#22c55e,transparent)'}}/>

       
        <div className='flex justify-center mt-8 mb-4 px-6'>
          <div className='relative'>
            <div className='absolute inset-0 rounded-2xl' style={{boxShadow:'0 0 30px rgba(34,197,94,0.4)',borderRadius:'16px'}}/>
            <img src={logo} alt="Francisco Beltran" className='w-full max-w-[160px] rounded-2xl relative z-10' style={{border:'1px solid rgba(34,197,94,0.3)'}}/>
          </div>
        </div>

        <div className='px-6 text-center flex-1 mt-12'>
         
          <h2 className='text-white font-bold text-2xl leading-tight mb-1'>Francisco<br/><span style={{color:'#22c55e'}}>Beltran</span></h2>
          <p className='text-gray-400 text-xs leading-relaxed mt-2'>Full Stack Developer</p>

          <div className='my-5 h-px w-full' style={{background:'linear-gradient(90deg,transparent,rgba(34,197,94,0.2),transparent)'}}/>

        
          <a href={urlCuriiculum} target='_blank' className='block w-full text-center text-sm font-semibold py-2.5 rounded-xl transition-all duration-200' style={{background:'#22c55e',color:'#fff',letterSpacing:'0.5px'}}
            onMouseEnter={e=>e.target.style.background='#16a34a'}
            onMouseLeave={e=>e.target.style.background='#22c55e'}>
            Descargar CV
          </a>
        </div>

        {/* Social links */}
        <div className='px-6 py-6 flex justify-center gap-3'>
          {[
            {href:'https://github.com/Francisco-Tirador',icon:<FaGithub/>,hover:'#a855f7'},
            {href:'https://www.linkedin.com/in/francisco-beltr%C3%A1n-342a31213/',icon:<FaLinkedin/>,hover:'#3b82f6'},
            {href:'https://api.whatsapp.com/send/?phone=5215620397081&text=Hola%20me%20gustaria%20trabajar%20con%20tigo&type=phone_number&app_absent=0',icon:<FaSquareWhatsapp/>,hover:'#22c55e'},
          ].map((s,i)=>(
            <a key={i} href={s.href} target='_blank'
              className='w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 transition-all duration-200 hover:text-white hover:scale-110'
              style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.08)'}}>
              {s.icon}
            </a>
          ))}
        </div>

       
        <div className='h-[2px] w-full' style={{background:'linear-gradient(90deg,transparent,rgba(34,197,94,0.3),transparent)'}}/>
      </div>

     
      <div className='md:hidden w-full h-auto flex items-center justify-between px-4 py-3 z-50'
        style={{background:'rgba(8,12,16,0.9)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(34,197,94,0.15)'}}>
        <div className='flex items-center gap-3'>
          <img src={logo} alt="logo" className='h-10 w-10 rounded-xl' style={{border:'1px solid rgba(34,197,94,0.3)'}}/>
          <div>
            <p className='text-white font-bold text-sm leading-tight'>Francisco Beltran</p>
            <p className='text-[10px]' style={{color:'#22c55e'}}>Full Stack Dev</p>
          </div>
        </div>
        <GiHamburgerMenu onClick={() => setPopMenu(true)} className='w-8 h-8 text-gray-300' />
      </div>

     
      {popMenu && (
        <div className='absolute z-[100] h-full w-full flex' style={{background:'rgba(0,0,0,0.8)',backdropFilter:'blur(16px)'}}>
          <div className='m-auto rounded-2xl p-8 flex flex-col items-center gap-6' style={{background:'rgba(22,27,34,0.95)',border:'1px solid rgba(34,197,94,0.2)',minWidth:'280px'}}>
            <p className='font-bold text-lg text-white'>Francisco Beltran</p>
            <div className='flex gap-4'>
              {[
                {href:'https://github.com/Francisco-Tirador',icon:<FaGithub className='w-6 h-6'/>},
                {href:'https://www.linkedin.com/in/francisco-beltr%C3%A1n-342a31213/',icon:<FaLinkedin className='w-6 h-6'/>},
                {href:'https://api.whatsapp.com/send/?phone=5215620397081&text=Hola%20me%20gustaria%20trabajar%20contigo&type=phone_number&app_absent=0',icon:<FaSquareWhatsapp className='w-6 h-6'/>},
              ].map((s,i)=>(
                <a key={i} href={s.href} target='_blank' className='w-12 h-12 flex items-center justify-center rounded-xl text-gray-300 hover:text-white transition-all'
                  style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)'}}>
                  {s.icon}
                </a>
              ))}
            </div>
            <a href={urlCuriiculum} target='_blank' className='btn-secundario w-full text-center'>Descargar CV</a>
            <button onClick={() => setPopMenu(false)} className='text-gray-500 hover:text-red-400 transition-colors text-sm'>Cerrar ✕</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Header