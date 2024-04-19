import React from 'react'
import {Form} from './components/Form'
import { userRequest, registRequest} from './services/auth'
import Button from './components/example/Button'

export default function App() {
  return (
    <div>
      <Form />
      <Button text='Click me!' />
      <Button text='nashe' />
    </div>
  )
}