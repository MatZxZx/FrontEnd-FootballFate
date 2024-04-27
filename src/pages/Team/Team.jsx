import TeamComponent from '../../components/Team/Team'
import dataTeam from '../../data/team'
import LayoutPage from '../../layouts/LayoutPage'

function Team() {
  return (
    <LayoutPage>
      <TeamComponent dataTeam={dataTeam} />
    </LayoutPage>
  )
}

export default Team