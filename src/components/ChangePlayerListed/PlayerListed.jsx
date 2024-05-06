import React from 'react'
import './PlayerListed.css'

export default function PlayerListed() {
    return (
    <div className='playerListed'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <img src='/src/assets/shirt.png' className='shirt'/>

            <div className='nameNPosition'>

                <div className='playerName'>Player</div>
                <div className='playerPosition'>DEL</div>

            </div>

            <div className='statsNstars'>

                <div className='stats'>

                    <div className='text-center'>

                        <div>0</div>
                        <div className='text-xs text-teal-200'>Goles</div>
                        
                    </div>

                    <div className='text-center'>

                        <div>0</div>
                        <div className='text-xs text-teal-200'>Assist</div>
                        
                    </div>

                    <div className='text-center'>

                        <div>0</div>
                        <div className='text-xs text-teal-200'>Port a 0</div>
                        
                    </div>

                    <div className='text-center'>

                        <div>0</div>
                        <div className='text-xs text-teal-200'>G/P</div>
                        
                    </div>

                    <div className='text-center'>

                        <div>0</div>
                        <div className='text-xs text-teal-200'>A/P</div>
                        
                    </div>

                    <div className='stars'>

                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>

                </div>

                </div>

            </div>
            

    </div>
  
    )
  }
  