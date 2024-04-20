import React from 'react'
import {Form} from './components/FormLogin/Form'
//import Button from './components/example/Button'
import { userRequest, registRequest} from './services/auth'
import Button from './components/example/Button'

export default function App() {
  return (
    <div>
      <Form />
    </div>
  )
}