import { getPositionColor } from '../../helpers/func'
import { notify, errorNotify } from '../../hooks/useNoty'

function PlayerCard({ player, team, setTeam, onBanking }) {

  const color = getPositionColor(player.section)

  function reset() {
    setTeam(team.clone())
  }

  function getPlayer(change) {
    return change.currentPlayers.pop()
  }

  function handleClickOnField() {
    if (team.changeBankingInProgress()) {
      team.changeBanking.addPlayer(player)
      const p2 = getPlayer(team.changeBanking)
      const p1 = getPlayer(team.changeBanking)
      if (team.isLeftWithoutPlayer(p2)) {
        errorNotify(`No se puede cambiar`)
      } else {
        team.changePlayersOnBanking(p1, p2)
        notify(`${p1.name} -> ${p2.name}`)
      }
      team.setSelectedPlayers([p1, p2], false)
      team.activeAllPlayers()
      team.changeBanking.inProgress = false
    } else if (team.changeFieldInProgress()) {
      team.changeField.addPlayer(player)
      const pA = getPlayer(team.changeField)
      const pB = getPlayer(team.changeField)
      if (pA.section === pB.section) {
        team.changePlayersOnField(pA, pB)
        notify(`${pA.name} -> ${pB.name}`)
      } else {
        errorNotify(`No se puede cambiar`)
      }
      team.setSelectedPlayers([pA, pB], false)
      team.activeAllPlayers()
      team.changeField.inProgress = false
    } else if (!team.changeBankingInProgress()) {
      team.changeField.addPlayer(player)
      team.disablePlayers((p) => p.section !== player.section, (p) => true)
      team.changeField.inProgress = true
      team.setSelectedPlayers([player], true)
    }
    reset()
  }

  function handleClickOnBanking() {
    if (team.changeBankingInProgress()) {
      team.activeAllPlayers()
      team.changeBanking.inProgress = false
      errorNotify(`No se puede cambiar`)
      team.setSelectedPlayers([player, getPlayer(team.changeBanking)], false)
    } else if (team.changeFieldInProgress()) {
      team.activeAllPlayers()
      errorNotify(`No se puede cambiar`)
      team.changeField.inProgress = false
      team.setSelectedPlayers([player, getPlayer(team.changeField)], false)
    } else if (!team.changeFieldInProgress()) {
      team.changeBanking.addPlayer(player)
      team.changeBanking.inProgress = true
      team.disablePlayers(() => false, (p) => p !== player)
      team.setSelectedPlayers([player], true)
    }
    reset()
  }

  let classNameContainer = 'min-w-[126px] max-w-[126px] flex flex-col items-center gap-1'
  let classNameP = ` text-sm text-[${color}] font-poppins font-semibold bg-[#202020] px-1 py-0.5 rounded-sm`

  if (player.selected) {
    classNameContainer = `${classNameContainer} scale-125 selected-player-${player.section.toLowerCase()}`
  } else if (player.inactive) {
    classNameContainer = `${classNameContainer} brightness-[.3]`
  } else {
    classNameContainer = `${classNameContainer} cursor-pointer hover:scale-125 transition-all brightness-[1.1]`
  }

  return <div className={classNameContainer} onClick={onBanking ? handleClickOnBanking : handleClickOnField}>
    <img className='w-12' src="/src/assets/shirt.png" alt={player.name} />
    <p className={classNameP}>{player.name}</p>
  </div>
}

export default PlayerCard