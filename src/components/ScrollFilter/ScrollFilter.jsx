import './scrollfilter.css'
import { useEffect, useState } from 'react'
import { getPositionColor } from "../../helpers/func"

function PlayerSearch({ name, setName, players, setPlayer }){

    function handleSubmit(evento) {
        evento.preventDefault()
        setPlayer(players.filter(player => player.name.toLowerCase().includes(name.toLowerCase())))
        setName("")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input className= 'search' type='text' name={name} placeholder='Buscar' onChange={(e) => setName(e.target.value)} />
            </form>
        </div>
    )
    
}

function PlayersOnScreen({players}){
    return(
        <ul className='text-white p-8'>
        {players.map(player=>{
            return(
                <li key={player.id}className='flex space-x-4 my-2 text-lg'><p>{player.name}</p>
                <p className={`text-[${getPositionColor(player.position)}]`}>Posicion: {player.position}</p>
                <p>Puntos: {player.points}</p>
                <p>Precio: {player.price}</p>
                <p>Goles: {player.goals}</p>
                <p>Asistencias: {player.assists}</p>
                </li>
            )
        })}

    </ul>

    )

}

export default function ScrollFilter({ players }){

    let [showList, setList]  = useState(players)
    const [name, setName] = useState('')

    let [screenList, setScreen]  = useState(players)

    let [position, setPosition] = useState('')

    let [statics, setStatics] = useState('')

    let [order, setOrder] = useState('')

    useEffect(() => {
        let res = [...showList]
        
        if (position !== "") {
            res = res.filter((player) => player.position === position)
        }

        if (statics !== "") {
            switch(statics) {
                case "goals":
                    res.sort((a, b)=> b.goals - a.goals)
                    break;
                case "assists":
                    res.sort((a, b)=> b.assists - a.assists)
                    break;
                case "points":
                    res.sort((a, b)=> b.points - a.points)
                    break;
            }
        }

        if (order !== "") {
            switch(order) {
                case "asc":
                    res.sort((a, b)=> a.name.localeCompare(b.name))
                break;
                case "desc":
                    res.sort((a, b)=> b.name.localeCompare(a.name))
                break;
            }
        }

        setScreen(res)
    }, [position, statics, order])


    return(
        <div>
        <div className="w-fit bg-[#202020] pt-3">
        <div className='flex space-x-6 pl-2'>
        <PlayerSearch name={name} setName={setName} players={screenList} setPlayer={setScreen}/>
        <div className='flex space-x-7 pl-7'>
        <button className='del' onClick={() => setPosition("DEL")}>
            DEL
          </button>
        <button className='mc' onClick={() => setPosition("MC")}>
            MC
          </button>
        <button className='df' onClick={() => setPosition("DF")}>
            DF
          </button>
        <button className='pt' onClick={() => setPosition("PT")}>
            PT
          </button>
          </div>
        </div>
        <div className="font-['Poppins'] text-white text-xl p-5 flex space-x-8">
        <p>Filtrar por</p>
        <button className='fil' onClick={() => setStatics("goals")}>
            Goles
        </button>
        <button className='fil' onClick={() => setStatics("assists")}>
            Asist
        </button>
        <button className='fil' onClick={() => setStatics("points")}>
            Pts
        </button>
        <button className='fil' onClick={() => {setScreen(showList); setPosition(""); setStatics(""); setOrder("") }}>
            Reset
        </button>
        <div className='flex space-x-4'>
        <button className='ord' onClick={() => setOrder("asc")}>
            ASC
        </button>
        <button className='ord' onClick={() => setOrder("desc")}>
            DESC
        </button>
        </div>
        </div>
        </div>
            <PlayersOnScreen players={screenList}/>
        </div>
    )
    
}