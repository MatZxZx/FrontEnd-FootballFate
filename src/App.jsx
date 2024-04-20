import React from 'react'
import {Form} from './components/Form'
import { userRequest, registRequest} from './services/auth'
import './components/start/button.css'
import Button from './components/start/Button'


export default function App() {



  return (
    <div>
      <Form />
      <Button text='Iniciar Sesión' clas='log'></Button> 
      <Button text='Registrarse' clas='reg'></Button>
    </div>
  )
}