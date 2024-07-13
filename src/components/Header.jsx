import React from 'react'
import logo from '../assets/images/logoFranco.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";




const Header = () => {
  return (
    <div className='w-[20%] bg-green-600s md:h-[90vh] rounded-md border-secondary border-2 z-50 flex flex-wrap' style={{ backdropFilter:" blur(5px)"}}>
        <img src={logo} alt=" logo francico" className='w-[80%] h-[40%] md:max-h-[200px]  ml-5 my-3 img-logo' />

        <span className='mx-auto'>
            <div className='my-[10%]'>
                <p className=' m-0'>Hola Soy</p>
                <p className='text-secondary font-bold m-0 '>Francisco Beltran</p>
                <p className='m-0 '>Dessarrollador Fron-End y diseñador</p>
            </div>
            <button className='btn-secundario'>DESCARGAR CV</button>
        </span>

        <div className='bg-secondary1 w-[80%] mx-auto p-3 flex justify-around mt-auto mb-4 '>
          <FaGithub className='w-[20%] h-[100%] hover:text-purple-600 cursor-pointer hover:scale-105 duration-200'/>
          <FaLinkedin className='w-[20%] h-[100%] hover:text-blue-500 cursor-pointer hover:scale-105 duration-200'/>
          <FaSquareWhatsapp className='w-[20%] h-[100%] hover:text-secondary cursor-pointer hover:scale-105 duration-200'/>
        </div>
    </div>
  )
}

export default Header