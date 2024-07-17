import React, { useState } from 'react'
import Galeria from '../components/Galeria'

import pokebola from '../assets/images/proyectos/pokebola.png'
import logoPokemon from '../assets/images/proyectos/logoPokemon.png'
import charmander from '../assets/images/proyectos/charmander.png'
import fondoRick from '../assets/images/proyectos/fondoRick.png'
import personajeRick from '../assets/images/proyectos/ricks.png'
import logoRick from '../assets/images/proyectos/logoRick.png'
import fondoGaleria from '../assets/images/proyectos/galeria.png'
import iconosGaleria from '../assets/images/proyectos/iconosGaleria.png'
import galeriaTitulo from '../assets/images/proyectos/galeriaTitulo.png'

import { IoIosCloseCircle } from "react-icons/io";

const Projects = () => {
    const [gallery, setGalery] = useState(false)
    const [item, setItem] = useState(false);
  
    const ArrayProyects = [
  
      { id: 2, imagenFondo: fondoGaleria, logo: galeriaTitulo, personaje: iconosGaleria, descripcion: "Esta es una galería con algunas imágenes y videos donde muestro algunos componentes y proyectos que realicé en mi estancia laboral.", titulo: "Galeria Proyectos Laborales", year: "2023-2024", page: "https://rickymort.netlify.app/", git: "https://github.com/Francisco-Tirador/rick" },
      { id: 4, imagenFondo: pokebola, logo: logoPokemon, personaje: charmander, descripcion: "Este proyecto web hace referencia a la famosa serie Pokémon utilizando su amplia gama de personajes aprovechándolos para explorar las diferentes formas de búsqueda de estos; construido en React, trabajando con la experiencia de usuario y la api.", titulo: "POKEDEX", year: "2022", page: "https://api-pokedex-francisco.netlify.app/", git: "https://github.com/Francisco-Tirador/PokedexApi" },
      { id: 3, imagenFondo: fondoRick, logo: logoRick, personaje: personajeRick, descripcion: "Este proyecto web ocupa los personajes de la serie Rick and Morty, tomado esta información para ver estos personajes en sus respectivos universos, construido en React, utilizando redux, y sus apis correspondientes.", titulo: "Rick and Morty", year: "2022", page: "https://rickymort.netlify.app/", git: "https://github.com/Francisco-Tirador/rick" }
  
    ]
  
    const toggleGallery = () => {
      setGalery(!gallery)
    }
    const btnClose = () => {
      setItem(false)
    }
  
    return (
  
      <>
         {
          item &&
          <div className='conten-picture overflow-auto p-2 ' >
            <IoIosCloseCircle className={"btn-close absolute left-0 top-10 md:top-0 m-4 w-6 h-6"} onClick={btnClose}/>
            <img src={item} className='ba' alt="" />
          </div>
        }
      <div className=' overflow-hidden clear relative'>
     
        <h2 className='apt FirstText'>Proyectos</h2>
  
  
        <Galeria btnClose={toggleGallery} slideOpen={gallery} setPicture={setItem} />
        <div className='box-conten-gallery'>
  
          {
            ArrayProyects.map(P => (
              <div key={P.id} className='rounded-md bg-gray-200 p-5 mx-3 my-2 sm:flex duration-300 hover:bg-secondary group '>
                <div className='w-[40%] min-w-[250px] h-[250px] rounded-[20px] relative mx-auto '>
                  <img className='fondoProyect rounded-md duration-500' src={P.imagenFondo} alt="" />
                  <img className='group-hover:top-[-40px] max-w-[80%] absolute right-0 left-0 top-[120px] m-auto duration-500' src={P.logo} alt="" />
                  <img className='group-hover:bottom-[50px] group-hover:opacity-100 h-[200px] absolute m-auto right-0 left-0 bottom-0 opacity-0  duration-500' src={P.personaje} alt="" />
                </div>
                <div className='flex justify-center items-center bg-white text-black px-5 py-3 m-3 box-border flex-wrap'>
                  <b>{P.titulo} - {P.year} </b>
                  
                    {
                      P.descripcion
                    }
                  
                  <div className='flex justify-around w-full'>
                    {
                      P.id != 2 ?
                        <>
                          <a target='_blank' href={P.git} className='btn-secundario '>Git</a>
                          <a target='_blank' href={P.page} className='btn-secundario '>Ver Proyecto</a>
                        </>
                        :
                        <button target='_blank' onClick={toggleGallery} className='btn-secundario '>Ver Galeria</button>
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      
      </>
    )
  }

export default Projects