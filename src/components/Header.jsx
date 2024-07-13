import React from 'react'
import logo from '../assets/images/logoFranco.png'

const Header = () => {
  return (
    <div className='w-[20%] bg-green-600s md:h-[90vh] rounded-md border-secondary border-2 z-50'>
        <img src={logo} alt="logo francico" className='w-[80%] mx-auto my-3' />


        <div>
            <div className='my-[10%]'>
                <p>Hola Soy</p>
                <p className='text-secondary font-bold '>Francisco Beltran</p>
                <p>Dessarrollador Fron-End y diseñador</p>
            </div>
            <button className='btn-secundario'>DESCARGAR CV</button>
        </div>
    </div>
  )
}

export default Header