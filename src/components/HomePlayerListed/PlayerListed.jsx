import React from 'react'
import './PlayerListed.css'

export default function PlayerListed({name, team, place, points}) {
  return (
    
    <div className='PlayerListed flex gap-9'>

        <img className='playerImg' src="/src/assets/download.png" alt="player" />

        <div className='playerNameNTeam'>
        
            <p>{name}</p>

            <div className='team'>

                <p>{team}</p>

            </div>
        
        </div>

        <div className='playerPlaceNPoints'>

            <p>{place}</p>

            <div className='points'>

                <p>{points}</p>

            </div>

        </div>

    </div>



  )
}
