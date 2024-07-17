import React from 'react'
import ai from '../assets/icon/ai.png'
import angular from '../assets/icon/angular.png'
import corel from '../assets/icon/corel.png'
import css from '../assets/icon/css.png'
import git from '../assets/icon/git.png'
import html from '../assets/icon/html.png'
import ionic from '../assets/icon/ionic.png'
import js from '../assets/icon/js.png'
import mysql from '../assets/icon/mysql.png'
import npm from '../assets/icon/npm.png'
import php from '../assets/icon/php.png'
import ps from '../assets/icon/ps.png'
import react from '../assets/icon/react.png'
import ts from '../assets/icon/ts.png'
import figma from '../assets/icon/logoFigma.png'
import express from '../assets/icon/expressLogo.png'
import mssql from '../assets/icon/mssqlLogo.jpeg'




const Skills = () => {

// Diseño móvil
const DesignIcons = [
    { name: 'FIGMA', src: figma },
    { name: 'Adobe Illustrator', src: ai },
    { name: 'CorelDRAW', src: corel },
    { name: 'Adobe Photoshop', src: ps },
  ];
const mobileIcons = [
    { name: 'Ionic', src: ionic },
  ];
  
  // Frontend
  const frontendIcons = [
    
    { name: 'CSS', src: css },
    { name: 'HTML', src: html },
    { name: 'JavaScript', src: js },
    { name: 'React', src: react },
    { name: 'Angular', src: angular },
    { name: 'TypeScript', src: ts },
  ];
  
  // Backend
  const backendIcons = [
    { name: 'Mssql', src: mssql },
    { name: 'Expres js', src: express },
    { name: 'MySQL', src: mysql },
    { name: 'PHP', src: php },
  ];
  
  // Herramientas
  const toolsIcons = [
    { name: 'Git', src: git },
    { name: 'npm', src: npm },
  ];



  return (
    <div className='flex flex-wrap justify-center items-center '>
    <h2 className='apt FirstText w-full'>Habilidades</h2>
    <h4 className='apt SecondText w-full'>FRONT-END</h4>
   {
    frontendIcons.map(i=>(
        <img key={i.src} src={i.src} title={i.name} className='w-[19%]  m-2 rounded-lg ' />
    ))
   }
    <h4 className='w-full SecondText'>DESARROLLO MÓVIL</h4>
    {
    mobileIcons.map(i=>(
        <img key={i.src} src={i.src} title={i.name} className='w-[19%]  m-2 rounded-lg ' />
    ))
   }
    <h4 className='w-full SecondText'>BACK-END</h4>
    {
    backendIcons.map(i=>(
        <img key={i.src} src={i.src} title={i.name} className='w-[19%]  m-2 rounded-lg ' />
    ))
   }
    <h4 className='w-full SecondText'>DISEÑO</h4>
    {
    DesignIcons.map(i=>(
        <img key={i.src} src={i.src} title={i.name} className='w-[19%] m-2 rounded-lg ' />
    ))
   }
    <h4 className='w-full SecondText'>HERRAMIENTA</h4>
      {
    
        toolsIcons.map(i=>(
            <img key={i.src} src={i.src} title={i.name} className='w-[19%] m-2 rounded-lg ' />
        ))
       }
    

</div>
  )
}

export default Skills