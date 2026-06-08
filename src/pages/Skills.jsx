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

const SkillSection = ({ title, icons }) => (
  <div className='w-full mb-4'>
    <div className='flex items-center gap-3 mb-3 px-2'>
      <span className='text-[10px] font-bold tracking-widest uppercase' style={{color:'#22c55e'}}>+ {title}</span>
      <div className='flex-1 h-px' style={{background:'linear-gradient(90deg,rgba(34,197,94,0.3),transparent)'}}/>
    </div>
    <div className='flex flex-wrap gap-2 px-2'>
      {icons.map(i => (
        <div key={i.src} className='flex flex-col items-center gap-1 group cursor-default'>
          <div className='w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-110'
            style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
            <img src={i.src} title={i.name} className='w-8 h-8 object-contain rounded-lg' />
          </div>
          <span className='text-[9px] text-gray-500 group-hover:text-gray-300 transition-colors'>{i.name}</span>
        </div>
      ))}
    </div>
  </div>
)

const Skills = () => {
  const frontendIcons = [
    { name: 'HTML', src: html },
    { name: 'CSS', src: css },
    { name: 'JavaScript', src: js },
    { name: 'TypeScript', src: ts },
    { name: 'React', src: react },
    { name: 'Angular', src: angular },
  ]
  const backendIcons = [
    { name: 'Express', src: express },
    { name: 'PHP', src: php },
    { name: 'MySQL', src: mysql },
    { name: 'MSSQL', src: mssql },
  ]
  const designIcons = [
    { name: 'Figma', src: figma },
    { name: 'Illustrator', src: ai },
    { name: 'Photoshop', src: ps },
    { name: 'CorelDRAW', src: corel },
  ]
  const toolsIcons = [
    { name: 'Git', src: git },
    { name: 'npm', src: npm },
    { name: 'Ionic', src: ionic },
  ]

  return (
    <div className='w-full h-full flex flex-col px-4 pb-5 overflow-y-auto'>
      {/* Header */}
      <div className='mb-5'>
        <span className='text-xs font-semibold tracking-widest uppercase' style={{color:'#22c55e'}}>+ STACK</span>
        <h2 className='text-white font-black text-2xl lg:text-3xl leading-tight'>
          Habilidades &<br/><span style={{color:'#22c55e'}}>Tecnologias</span>
        </h2>
      </div>

      <SkillSection title="Front-End" icons={frontendIcons} />
      <SkillSection title="Back-End" icons={backendIcons} />
      <SkillSection title="diseño" icons={designIcons} />
      <SkillSection title="Herramientas" icons={toolsIcons} />
    </div>
  )
}

export default Skills
