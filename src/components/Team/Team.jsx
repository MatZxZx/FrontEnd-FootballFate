import { useState } from 'react'
import PlayerCard from './PlayerCard'
import TeamClass from './team'

function Team({ dataTeam }) {

  const [team, setTeam] = useState(new TeamClass(dataTeam.campo, dataTeam.banca))

  return (
    <div className='w-full mx-auto text-primary font-poppins flex gap-8 justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h2 className='text-xl font-semibold'>Banca</h2>
        {
          team.banking.map((player, i) => {
            return <PlayerCard key={i} player={player} team={team} setTeam={setTeam} onBanking />
          })
        }
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold'>Campo</h2>
        <div className='campo-de-fulbo flex flex-col justify-center items-center gap-6'>
          {
            team.sections.map((section, i) => {
              return <div key={i} className='w-full flex gap-8 justify-center'>
                {
                  section.map((player, i) => {
                    return <PlayerCard key={i} player={player} team={team} setTeam={setTeam} />
                  })
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Team