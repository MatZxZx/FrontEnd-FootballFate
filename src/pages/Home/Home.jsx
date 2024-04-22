import './home.css'
import { useSelector } from 'react-redux'

function Home() {

  const authState = useSelector(state => state.auth)

  return (
    <div className='flex flex-col items-center mt-12 gap-5'>
      <h1 className='text-2xl text-white font-bold'>Esta es la home bienvenido { authState.user.email } </h1>
    </div>
  )
}

export default Home