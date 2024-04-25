import {
  DEL,
  MC,
  DF,
  PT
} from '../const/positions'

const jugadoresEnCampo = [
  {name: 'Chaparro', section: DEL},
  {name: 'Jimenez', section: DEL},
  {name: 'Quinteros', section: MC},
  {name: 'Marco', section: MC},
  {name: 'Dimitrioff', section: DF},
  {name: 'Rodriguez', section: DF},
  {name: 'Dular', section: PT}
]

const jugadoresEnBanca = [
  {name: 'Ferro', section: MC},
  {name: 'Jerez', section: DF}
]

export default {
  campo: jugadoresEnCampo,
  banca: jugadoresEnBanca
}