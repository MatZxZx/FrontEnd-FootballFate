import React from 'react'
import './PlayerListed.css'

export default function PlayerListed() {
  return (
    
    <div className='PlayerListed flex gap-9'>

        <img className='playerImg' src="/src/assets/download.png" alt="player" />

        <div className='playerNameNTeam'>
        
            <p>ElMoschen123</p>

            <div className='team'>

                <p>Wolloktastic CF</p>

            </div>
        
        </div>

        <div className='playerPlaceNPoints'>

            <p>1°</p>

            <div className='points'>

                <p>120 PTS</p>

            </div>

        </div>

    </div>



  )
}
