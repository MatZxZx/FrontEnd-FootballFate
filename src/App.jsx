import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import Welcome from './pages/Welcome/Welcome'
import Team from './pages/Team/Team'

function DevApp() {
  return (
    <Routes>
      <Route path='mati'></Route>
      <Route path='facu'></Route>
      <Route path='chap'></Route>
    </Routes>
  )
}

function App() {
  return (
    // Paginas
    <Routes>
      {/* Rutas Globales */}
      <Route path='/' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      {/* Rutas Protegidas */}
      <Route element={<ProtectedRoute/>} >
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/team' element={<Team />} />
      </Route>
    </Routes>
  )
}

export default DevApp