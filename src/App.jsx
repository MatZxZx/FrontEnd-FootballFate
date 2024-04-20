import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth/login' element={<p>Soy el login</p>}/>
        <Route path='/auth/register' element={<p>Soy el registro</p>}/>
      </Routes>
    </>
  )
}