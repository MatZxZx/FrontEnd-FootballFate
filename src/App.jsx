import React from 'react'
import { Routes, Route} from 'react-router-dom'
import {Form} from './components/Form'
import Button from './components/example/Button'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<p>Soy la Home</p>}/>
        <Route path='/auth/login' element={<p>Soy el login</p>}/>
        <Route path='/auth/register' element={<p>Soy el registro</p>}/>
      </Routes>
    </div>
  )
}