import React from 'react'
import "./Continue.css"

export default function Continue(user) {
  return (
    <div className='Continue'>

        <h1>Bienvenido {user}</h1>


        <div className='title'>

            <p>Arma tu Fantasy inicial para comenzar a competir</p>

        </div>

        <ul>

            <li>Selecciona 9 jugadores para completar tu equipo</li>
            <li>Despues prepara tu 7 inicial para la siguiente jornada</li>

        </ul>

        <button className='continueButton'> Continuar </button>

    </div>

  )
}
