import './PlayerListed.css'
import { getPositionColor } from '../../helpers/func'

export default function PlayerListed({name, position, goals, assist, portTo0, GP, AP, PTSgrl, ARGs}) {
    return (
        <div className='flex text-white font-poppins bg-[#202020] max-w-max rounded-lg p-2 mt-12 ml-12'>
            <div className='flex items-center'>
                <img className='min-w-27' src='/src/assets/shirt.png' />
            </div>
            <div className='flex flex-col justify-center gap-4'>
                <div className='flex justify-center gap-4'>
                    <p className='text-xl'>{name}</p>
                    <p style={{color: getPositionColor(position)}}>{position}</p>
                </div>
                <div className='flex gap-4'>
                    <div className='text-center text-sm min-w-max'>
                        <p>{goals}</p>
                        <p className='text-xs text-teal-200'>Goles</p>
                    </div>
                    <div className='text-center text-sm min-w-max'>
                        <p>{assist}</p>
                        <p className='text-xs text-teal-200'>Assist</p>
                    </div>
                    <div className='text-center text-sm min-w-max'>
                        <p>{portTo0}</p>
                        <p className='text-xs text-teal-200'>Port a 0</p>
                    </div>
                    <div className='text-center text-sm min-w-max'>
                        <p>{GP}</p>
                        <p className='text-xs text-teal-200'>G/P</p>
                    </div>
                    <div className='text-center text-sm min-w-max'>
                        <p>{AP}</p>
                        <p className='text-xs text-teal-200'>A/P</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 px-5'>
                <div className='flex items-center gap-6'>
                    <div>
                        <p className='text-center'>{PTSgrl}</p>
                        <p className='text-xs text-teal-200'>PTS GRL</p>
                    </div>
                    <p>/</p>
                    <div>
                        <p className='text-center'>{ARGs}</p>
                        <p className='text-xs text-teal-200'>Args$</p>
                    </div>
                </div>

                <div className='flex items-center gap-1'>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                </div>
            </div>
        </div>
    )
  }
  

/*
 <div className='playerListed'>
        <div>
            <img src='/src/assets/shirt.png' className='shirt'/>
        </div>
        <div className='nameNPosition'>



        </div>

            

            <div className='stats'>

                <div className='text-center'>

                    <p>0</p>
                    <p className='text-xs text-teal-200'>Goles</p>
                    
                </div>

                <div className='text-center'>

                    <p>0</p>
                    <p className='text-xs text-teal-200'>Assist</p>
                    
                </div>

                <div className='text-center'>

                    <p>0</p>
                    <p className='text-xs text-teal-200'>Port a 0</p>
                    
                </div>

                <div className='text-center'>

                    <p>0</p>
                    <p className='text-xs text-teal-200'>G/P</p>
                    
                </div>

                <div className='text-center'>
                    <p>0</p>
                    <p className='text-xs text-teal-200'>A/P</p>
                </div>
                <div className='stars'>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
            </div>
        </div>
    </div>
*/