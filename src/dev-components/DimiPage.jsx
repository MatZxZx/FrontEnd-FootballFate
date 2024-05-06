import React from 'react'
import ScrollFilter from '../components/ScrollFilter/ScrollFilter'
import { playerComp } from '../helpers/func'


function DimiPage() {
  return (
    <div>
      <ScrollFilter players={playerComp} />
    </div>
  )
}

export default DimiPage