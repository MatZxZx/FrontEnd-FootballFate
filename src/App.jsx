import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Navbar from './components/Navbar/Navbar'
import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import Welcome from './pages/Welcome/Welcome'
import Team from './pages/Team/Team'
import Rank from './pages/Rank/Rank'
import Transfer from './pages/Transfer/Transfer'
import AllPlayers from './pages/AllPlayers/AllPlayers'
import Page404 from './pages/404/Page404'
import { ToastContainer } from 'react-toastify'

// Componentes de desarrollo
import MatPage from './dev-components/MatPage'
import ChapPage from './dev-components/ChapPage'
import DimiPage from './dev-components/DimiPage'


function DevApp() {
  return (
    <>
      {/* <Navbar /> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        toastStyle={{
          background: '#247855'
        }}
        closeButton={false}
      />
      <Routes>
        <Route path='/mati' element={<MatPage />}></Route>
        <Route path='/chap' element={<ChapPage />}></Route>
        <Route path='/facu' element={<DimiPage />}></Route>
      </Routes>
    </>

  )
}

function App() {
  return (
    // Paginas
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        toastStyle={{
          background: '#247855'
        }}
        closeButton={false}
      />
      <Routes>
        {/* Rutas Publicas */}
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        {/* Rutas Protegidas */}
        {/* <Route element={<ProtectedRoute />} > */}
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/team' element={<Team />} />
        <Route path='/rank' element={<Rank />} />
        <Route path='/transfer' element={<Transfer />} />
        <Route path='/allplayers' element={<AllPlayers />} />
        <Route path='/*' element={<Page404 />} />
        {/* </Route> */}
      </Routes>
    </>
      
  )
}

export default App