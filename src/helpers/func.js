export function getWidthByPoints(points) {
  return points > 20 ? 512 : 512 / 20 * points 
}

export function getPositionColor(position) {
  switch (position) {
    case 'DF':
      return '#58C6CD'
    case 'DEL':
      return '#C71919'
    case 'MC':
      return '#E3E816'
    case 'PT':
      return '#CC40E2'
    default:
      return '#fff'
  }
}



export const playerComp =[
  {
    id: '1',
    name: 'Moschen Medio',
    position: 'MC',
    points: '90',
    price: '13',
    goals: 5,
    assists: '8'
  },

  {
    id: '2',
    name: 'Dimitrioff',
    position: 'DF',
    points: '50',
    price: '7',
    goals: 1,
    assists: '9'
  },

  {
    id: '3',
    name: 'Chaparro',
    position: 'DEL',
    points: '120',
    price: '17',
    goals: 10,
    assists: '4'
  },

  {
    id: '4',
    name: 'Rodriguez',
    position: 'DEL',
    points: '100',
    price: '12',
    goals: 6,
    assists: '9'
  },

  {
    id: '5',
    name: 'Dular',
    position: 'MC',
    points: '130',
    price: '18',
    goals: 4,
    assists: '10'
  },

  {
    id: '6',
    name: 'Moschen Inicio',
    position: 'PT',
    points: '150',
    price: '18',
    goals: 1,
    assists: '3'
  },

  {
    id: '7',
    name: 'Gualter',
    position: 'PT',
    points: '180',
    price: '19',
    goals: 0,
    assists: '1'
  },

  {
    id: '8',
    name: 'Ferro',
    position: 'DEL',
    points: '130',
    price: '12',
    goals: 7,
    assists: '11'
  },

  {
    id: '9',
    name: 'Jerez',
    position: 'DF',
    points: '60',
    price: '8',
    goals: 2,
    assists: '5'
  },
  {
    "id": "10",
    "name": "López",
    "position": "MC",
    "points": "110",
    "price": "15",
    "goals": 3,
    "assists": "7"
  },
  {
    "id": "11",
    "name": "García",
    "position": "DF",
    "points": "80",
    "price": "10",
    "goals": 1,
    "assists": "4"
  },
  {
    "id": "12",
    "name": "Martínez",
    "position": "DEL",
    "points": "140",
    "price": "16",
    "goals": 8,
    "assists": "6"
  },
  {
    "id": "13",
    "name": "González",
    "position": "MC",
    "points": "120",
    "price": "14",
    "goals": 2,
    "assists": "9"
  },
  {
    "id": "14",
    "name": "Pérez",
    "position": "PT",
    "points": "160",
    "price": "17",
    "goals": 5,
    "assists": "11"
  },
  {
    "id": "15",
    "name": "Hernández",
    "position": "PT",
    "points": "150",
    "price": "16",
    "goals": 3,
    "assists": "8"
  },
  {
    "id": "16",
    "name": "Sánchez",
    "position": "DF",
    "points": "90",
    "price": "11",
    "goals": 0,
    "assists": "6"
  },
  {
    "id": "17",
    "name": "Fernández",
    "position": "DEL",
    "points": "130",
    "price": "15",
    "goals": 4,
    "assists": "7"
  },
  {
    "id": "18",
    "name": "Ramírez",
    "position": "MC",
    "points": "100",
    "price": "13",
    "goals": 2,
    "assists": "5"
  },
  {
    "id": "19",
    "name": "Torres",
    "position": "DF",
    "points": "70",
    "price": "9",
    "goals": 1,
    "assists": "3"
  },
  {
    "id": "20",
    "name": "Gómez",
    "position": "DEL",
    "points": "150",
    "price": "17",
    "goals": 6,
    "assists": "8"
  },
  {
    "id": "21",
    "name": "Ruiz",
    "position": "MC",
    "points": "110",
    "price": "14",
    "goals": 3,
    "assists": "6"
  },
  {
    "id": "22",
    "name": "Vázquez",
    "position": "PT",
    "points": "170",
    "price": "18",
    "goals": 4,
    "assists": "9"
  },
  {
    "id": "23",
    "name": "Reyes",
    "position": "PT",
    "points": "180",
    "price": "19",
    "goals": 5,
    "assists": "10"
  },
  {
    "id": "24",
    "name": "Santos",
    "position": "DF",
    "points": "80",
    "price": "10",
    "goals": 2,
    "assists": "4"
  },
  {
    "id": "25",
    "name": "Ortega",
    "position": "DEL",
    "points": "140",
    "price": "16",
    "goals": 5,
    "assists": "6"
  },
  {
    "id": "26",
    "name": "Molina",
    "position": "MC",
    "points": "120",
    "price": "14",
    "goals": 3,
    "assists": "7"
  },
  {
    "id": "27",
    "name": "Cruz",
    "position": "DF",
    "points": "90",
    "price": "11",
    "goals": 1,
    "assists": "5"
  },
  {
    "id": "28",
    "name": "Castillo",
    "position": "DEL",
    "points": "130",
    "price": "15",
    "goals": 3,
    "assists": "8"
  },
  {
    "id": "29",
    "name": "Núñez",
    "position": "PT",
    "points": "160",
    "price": "17",
    "goals": 6,
    "assists": "9"
  },
  {
    "id": "30",
    "name": "León",
    "position": "PT",
    "points": "150",
    "price": "16",
    "goals": 4,
    "assists": "10"
  }
]