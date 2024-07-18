import React, { useState } from 'react'
import logo from '../assets/images/logoFranco.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from 'react-icons/io';





const Header = () => {
  const [popMenu,setPopMenu]=useState(false)



  return ( 
<>
<div className='bg-black md:bg-transparent w-full h-auto md:w-[20%] md:max-w-[300px] bg-green-600s md:h-[90vh] rounded-md border-secondary border-2 z-50 flex flex-wrap justify-between md:mx-auto ' style={{ backdropFilter:" blur(5px)"}}>
        <img src={logo} alt=" logo francico" className='h-[50px] w-[50px] md:h-auto md:w-auto lg:max-w-auto md:max-h-[200px] ml-2 md:mx-auto md:my-3 md:img-logo md:mt-5 md:rounded-xl md:shadow-2xl md:border md:border-secondary' />

        <span className='mx-auto hidden md:block'>
            <div className='my-[10%]'>
                <p className=' m-0'>Hola Soy</p>
                <p className='text-secondary font-bold m-0 FirstText '>Francisco Beltran</p>
                <p className='m-0 '>Dessarrollador Fron-End y diseñador</p>
            </div>
            <a href='https://drive.google.com/file/d/1nl-sFX3R-2klFylSx3JOaVuXFo4Vnz8o/view?usp=sharing' target='_blank' className='btn-secundario '>DESCARGAR CV</a>
        </span>

        <div className='hidden  bg-secondary1 w-[80%] mx-auto p-3 md:flex justify-around mt-auto mb-4 '>
          <a className='w-[20%] h-[100%]' href="https://github.com/Francisco-Tirador" target='_blank'>
          <FaGithub className='w-full h-full hover:text-purple-600 cursor-pointer hover:scale-105 duration-200'/>
          </a>
          <a className='w-[20%] h-[100%]' href="https://www.linkedin.com/in/francisco-beltr%C3%A1n-342a31213/" target='_blank'>
          <FaLinkedin className='w-full h-full hover:text-blue-500 cursor-pointer hover:scale-105 duration-200'/>
          </a>
          <a className='w-[20%] h-[100%]' href="https://api.whatsapp.com/send/?phone=5215620397081&text=Hola%20me%20gustaria%20trabajar%20con%20tigo&type=phone_number&app_absent=0" target='_blank'>
             <FaSquareWhatsapp className='w-full h-full hover:text-secondary cursor-pointer hover:scale-105 duration-200'/>
          
          </a>
        </div>
        <GiHamburgerMenu onClick={()=>setPopMenu(true)} className='w-[40px] h-[40px] my-auto mr-2 md:hidden'/>

        
    </div>
  {
    popMenu&&
<div className=' absolute z-50 h-full w-full flex' style={{backgroundColor:"#0000007d"}}>
     <div className='bg-gray-800 w-[350px] h-[350px]  m-auto top-0 right-0 left-0 bottom-0 rounded-full flex '>
      <span className='m-auto'>
          <div className='w-full flex justify-center mb-3'> 
          <a  href="https://github.com/Francisco-Tirador" target='_blank'>
           <FaGithub className='w-[40px] h-[40px] hover:text-purple-600 cursor-pointer hover:scale-105 duration-200 mx-2'/>
           </a>
           <a  href="https://www.linkedin.com/in/francisco-beltr%C3%A1n-342a31213/" target='_blank'>
          <FaLinkedin className='w-[40px] h-[40px] hover:text-blue-500 cursor-pointer hover:scale-105 duration-200 mx-2'/>
          </a>
          <a  href="https://api.whatsapp.com/send/?phone=5215620397081&text=Hola%20me%20gustaria%20trabajar%20con%20tigo&type=phone_number&app_absent=0" target='_blank'>
          <FaSquareWhatsapp className='w-[40px] h-[40px] hover:text-secondary cursor-pointer hover:scale-105 duration-200 mx-2'/>
          </a>
       </div>
         <div className='w-full my-6'>
         <IoIosCloseCircle className={"btn-close w-[40px] h-[40px] m-auto"} onClick={()=>setPopMenu(false)}/>
         </div>
         <a href='https://drive.google.com/file/d/1nl-sFX3R-2klFylSx3JOaVuXFo4Vnz8o/view?usp=sharing' target='_blank' className='btn-secundario mt-2'>DESCARGAR CV</a>

      </span>
      
      </div>
</div>
  }
</>
  )
}

export default Header