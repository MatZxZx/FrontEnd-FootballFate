import { useState, useEffect } from 'react'
import dataTeam from '../data/team'
import {
  getPositionColor
} from '../helpers/func'
import { notify, errorNotify } from '../hooks/useNoty'

class Change {
  currentPlayers = []
  inProgress = false

  addPlayer(player) {
    if (this.currentPlayers.length < 2) {
      this.currentPlayers.push(player)
    }
  }

  canMakeChange() {
    return this.currentPlayers === 2
  }

  makeChange(functionChange) {
    console.log(this.currentPlayers)
    functionChange(this.currentPlayers.pop(), this.currentPlayers.pop())
  }
}

class Team {
  constructor(onField, onBanking, sections, changeField, changeBanking) {
    this.field = this.playersAdapter(onField) // jugadores en campo
    this.banking = this.playersAdapter(onBanking) // jugadores en banca
    this.sections = sections ? sections : [[], [], [], []] // secciones: DEL, MD, DF, PT.
    this.changeField = changeField ? changeField : new Change()
    this.changeBanking = changeBanking ? changeBanking : new Change()
    if (!sections) {
      this.init()
    }
  }

  playersAdapter(players) {
    return players.map(p => {
      return {
        name: p.name,
        section: p.section,
        inactive: p.inactive === undefined ? false : p.inactive
      }
    })
  }

  getEmptySections() {
    return [[], [], [], []]
  }

  onField(player) {
    return this.field.includes(player)
  }

  onBanking(player) {
    return this.banking.includes(player)
  }

  canChangePlayersOnBanking() {
    return !this.changeField.inProgress // se puede empezar un cambio en banca si no hay un cambio en proceso
  }

  changePlayersOnBanking(playerOnBanking, playerOnField) {
    if (!this.canChangePlayersOnBanking()) {
      console.log('Hay un cambio de campo en proceso', this.changeField.currentPlayers.toString())
      return
    }

    const section = this.getSection(playerOnField.section)
    section.splice(section.indexOf(playerOnField), 1)
    let index = -1
    this.banking.forEach((j, i) => {
      if (j.name.toLowerCase() === playerOnBanking.name.toLowerCase()) {
        index = i
      }
    })
    this.banking.splice(index, 1, playerOnField)
    this.getSection(playerOnBanking.section).push(playerOnBanking)

  }

  changeFieldInProgress() {
    return this.changeField.inProgress
  }

  changeBankingInProgress() {
    return this.changeBanking.inProgress
  }
  /*
    se puede empezar un cambio en campo si no hay un cambio en proceso y
    si los jugadores son de la misma seccion
  */
  canChangePlayersOnField(playerA, playerB) {
    return (
      (!this.changeBanking.inProgress) &&
      (playerA.section === playerB.section)
    )
  }

  addPlayerOnChangeOnField(player) {
    this.changeField.push(player)
  }

  changePlayersOnField(playerA, playerB) {
    const section = this.getSection(playerA.section)
    const indexA = section.indexOf(playerA)
    const indexB = section.indexOf(playerB)
    section[indexA] = playerB
    section[indexB] = playerA
  }

  getSection(section) {
    return {
      DEL: this.sections[0],
      MC: this.sections[1],
      DF: this.sections[2],
      PT: this.sections[3],
    }[section]
  }

  init() {
    this.field.forEach(player => {
      this.getSection(player.section).push(player)
    })
  }

  clone() {
    return new Team(this.field, this.banking, this.sections, this.changeField, this.changeBanking)
  }

  disablePlayers(predicateOnField, predicateOnBanking) {
    this.field.forEach(p => {
      if (predicateOnField(p)) {
        p.inactive = true
      }
    })
    this.sections.forEach(s => {
      s.forEach(p => {
        if (predicateOnField(p)) {
          p.inactive = true
        }
      })
    })
    this.banking.forEach(p => {
      if (predicateOnBanking(p)) {
        p.inactive = true
      }
    })
  }

  activeAllPlayers() {
    this.field.forEach(p => {
      p.inactive = false
    })
    this.banking.forEach(p => {
      p.inactive = false
    })
    this.sections.forEach(s => {
      s.forEach(p => {
        p.inactive = false
      })
    })
  }
}

function PlayerCadr({ player, team, setTeam, onBanking }) {

  const color = getPositionColor(player.section)


  function handleClickOnField() {
    if (team.changeBankingInProgress()) {
      team.changeBanking.addPlayer(player)
      const p2 = team.changeBanking.currentPlayers.pop()
      const p1 = team.changeBanking.currentPlayers.pop()
      const section = team.getSection(p2.section)
      if ((section.length - 1) === 0) {
        team.activeAllPlayers()
        errorNotify(`No se puede cambiar`)
        team.changeBanking.inProgress = false
        setTeam(team.clone())
        return
      }

      team.changePlayersOnBanking(p1, p2)
      team.activeAllPlayers()
      notify(`${p2.name} -> ${p1.name}`)
      team.changeBanking.inProgress = false
      setTeam(team.clone())
      return
    }

    if (team.changeFieldInProgress()) {
      team.changeField.addPlayer(player)
      const pA = team.changeField.currentPlayers.pop()
      const pB = team.changeField.currentPlayers.pop()
      if (pA.section === pB.section) {
        team.changePlayersOnField(pA, pB)
        team.activeAllPlayers()
        notify(`${pA.name} -> ${pB.name}`)
      } else {
        team.activeAllPlayers()
        errorNotify(`No se puede cambiar`)
      }
      team.changeField.inProgress = false
      setTeam(team.clone())
      return
    }
    if (!team.changeBankingInProgress()) {
      team.changeField.addPlayer(player)
      team.disablePlayers((p) => p.section !== player.section, (p) => true)
      team.changeField.inProgress = true
      setTeam(team.clone())
    }
  }

  function handleClickOnBanking() {
    if (team.changeBankingInProgress()) {
      team.activeAllPlayers()
      team.changeBanking.inProgress = false
      errorNotify(`No se puede cambiar`)
      setTeam(team.clone())
      return
    }
    if (team.changeFieldInProgress()) {
      team.activeAllPlayers()
      errorNotify(`No se puede cambiar`)
      team.changeField.inProgress = false
      setTeam(team.clone())
      return
    }

    if (!team.changeFieldInProgress()) {
      team.changeBanking.addPlayer(player)
      team.changeBanking.inProgress = true
      team.disablePlayers(() => false, (p) => p !== player)
      setTeam(team.clone())
      return
    }
  }

  const classNameBase = 'min-w-32 flex flex-col justify-center items-center gap-1'
  const className = player.inactive ? `${classNameBase} brightness-[.3]` : `${classNameBase} cursor-pointer hover:scale-150 transition-all brightness-[1.1]`

  return <div className={className} onClick={onBanking ? handleClickOnBanking : handleClickOnField}>
    <img className='w-12' src="/src/assets/shirt.png" alt={player.name} />
    <p className={`text-sm text-[${color}] font-poppins font-semibold bg-[#202020] px-1 py-0.5 rounded-sm`}>{player.name}</p>
  </div>
}

function ChapPage() {

  const [team, setTeam] = useState(new Team(dataTeam.campo, dataTeam.banca))

  return (
    <div className='w-[1024px] mx-auto text-white flex justify-center items-center gap-8'>
      <div className='flex flex-col justify-center items-center gap-8'>
        {
          team.banking.map((player, i) => {
            return <PlayerCadr key={i} player={player} team={team} setTeam={setTeam} inactive={player.inactive} onBanking />
          })
        }
      </div>
      <div className='campo-de-fulbo flex flex-col justify-center items-center gap-8'>
        {
          team.sections.map((section, i) => {
            return <div key={i} className='flex gap-4'>
              {
                section.map((player, i) => {
                  return <PlayerCadr key={i} player={player} team={team} setTeam={setTeam} inactive={player.inactive}/>
                })
              }
            </div>
          })
        }
      </div>
    </div>
  )
}

export default ChapPage