import React from 'react'
import FormLogin from '../../components/FormLogin/FormLogin'
import logo from '../../assets/logo.png'
import './landing.css'
import SectionPlayerWeek from '../../components/SectionPlayerWeek/SectionPlayerWeek'

function Landing() {
  return (
    <div className='w-full'>
      <div className='w-[1536px] h-[800px] mx-auto flex justify-between gap-16'>
        <div className='w-1/2 flex flex-col gap-4  items-start justify-center'>
          <p className='pl-2 text-2xl text-primary font-poppins font-semibold'>Bienvenido a</p>
          <div>
            <img className='' src={logo} alt="logo" />
          </div>
          <p className='pl-2 text-lg text-primary font-poppins italic'>Crea tu Equipo, Analiza, Compite y Gana</p>
        </div>
        <div className='flex justify-end items-center w-1/2'>
          <div className='w-[512px]'>
            <FormLogin />
          </div>
        </div>
      </div>
      <div className='mb-24'>
        <SectionPlayerWeek />
      </div>
    </div>
  )
}

export default Landing