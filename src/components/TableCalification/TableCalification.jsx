import { useState } from 'react'
import playersList from '../../data/players'
import { useEffect } from 'react'
import PlayerListed from '../HomePlayerListed/PlayerListed'

function TableCalification() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    setPlayers([ ...playersList ])
  }, [])

  return (
    <div>
      {
        players.map(player => <PlayerListed />)
      }
    </div>
  )
}

export default TableCalification