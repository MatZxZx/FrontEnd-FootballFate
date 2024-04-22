import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Landing from './pages/Landing/Landing'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Welcome from './pages/Welcome/Welcome'
import Team from './pages/Team/Team'
import { useSelector } from 'react-redux'
import useAuth from './hooks/useAuth'
import StatsGrid from './components/HomePlayerStats/PlayerStats'

function App() {

  const auth = useSelector(state => state.auth)
  const { setAuth, setLoading } = useAuth()

  const { isAuth, isLoading } = auth.auth

  return (
    <>
      <Routes>
        <Route path='/stats' element={<StatsGrid/>}/>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route element={<ProtectedRoute/>} >
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/team' element={<Team />} />
        </Route>
      </Routes>
      {/* <h1 className='text-white text-2xl'>{`${isAuth} ${isLoading}`}</h1>
      <button className='bg-white' onClick={() => setAuth(!isAuth)}>
        autorizar
      </button>
      <button className='bg-white' onClick={() => setLoading(!isLoading)}>
        cargando
      </button> */}
    </>
    
  )
}

export default App