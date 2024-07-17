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
<div className='bg-blue-950 md:bg-transparent w-full h-auto md:w-[20%] md:max-w-[300px] bg-green-600s md:h-[90vh] rounded-md md:border-secondary md:border-2 z-50 flex flex-wrap justify-between ' style={{ backdropFilter:" blur(5px)"}}>
        <img src={logo} alt=" logo francico" className='h-[50px] w-[50px] md:h-auto md:w-auto lg:max-w-auto md:max-h-[200px] ml-2 md:mx-auto md:my-3 md:img-logo md:mt-5 md:rounded-xl md:shadow-2xl md:border md:border-secondary' />

        <span className='mx-auto hidden md:block'>
            <div className='my-[10%]'>
                <p className=' m-0'>Hola Soy</p>
                <p className='text-secondary font-bold m-0 '>Francisco Beltran</p>
                <p className='m-0 '>Dessarrollador Fron-End y diseñador</p>
            </div>
            <button className='btn-secundario'>DESCARGAR CV</button>
        </span>

        <div className='hidden  bg-secondary1 w-[80%] mx-auto p-3 md:flex justify-around mt-auto mb-4 '>
          <FaGithub className='w-[20%] h-[100%] hover:text-purple-600 cursor-pointer hover:scale-105 duration-200'/>
          <FaLinkedin className='w-[20%] h-[100%] hover:text-blue-500 cursor-pointer hover:scale-105 duration-200'/>
          <FaSquareWhatsapp className='w-[20%] h-[100%] hover:text-secondary cursor-pointer hover:scale-105 duration-200'/>
        </div>
        <GiHamburgerMenu onClick={()=>setPopMenu(true)} className='w-[40px] h-[40px] my-auto mr-2 md:hidden'/>

        
    </div>
  {
    popMenu&&
<div className=' absolute z-50 h-full w-full flex' style={{backgroundColor:"#0000007d"}}>
     <div className='bg-gray-800 w-[350px] h-[350px]  m-auto top-0 right-0 left-0 bottom-0 rounded-full flex '>
      <span className='m-auto'>
          <div className='w-full flex justify-center mb-3'> 
           <FaGithub className='w-[40px] h-[40px] hover:text-purple-600 cursor-pointer hover:scale-105 duration-200 mx-2'/>
          <FaLinkedin className='w-[40px] h-[40px] hover:text-blue-500 cursor-pointer hover:scale-105 duration-200 mx-2'/>
          <FaSquareWhatsapp className='w-[40px] h-[40px] hover:text-secondary cursor-pointer hover:scale-105 duration-200 mx-2'/>
       </div>
         <div className='w-full '>
         <IoIosCloseCircle className={"btn-close w-[40px] h-[40px] m-auto"} onClick={()=>setPopMenu(false)}/>
         </div>
         <button className='btn-secundario mt-3'>DESCARGAR CV</button>

      </span>
      
      </div>
</div>
  }
</>
  )
}

export default Header