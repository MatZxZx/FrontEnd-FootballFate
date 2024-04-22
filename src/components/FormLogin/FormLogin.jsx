import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../ButtonAuth/Button'
import useAuth from '../../hooks/useAuth'
import useUser from '../../hooks/useUser'
import './formLogin.css'

function FormLogin() {

  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [user, setUser] = useState({
    email: {
      value: '',
      setError: setErrorEmail
    },
    password: {
      value: '',
      setError: setErrorPassword
    }
  })
  const { setAuth, setLoading } = useAuth()
  const { setUser: setUserState } = useUser()

  const navigate = useNavigate()

  function handleFocus(e) {
    user[e.target.name].setError(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const email = user.email.value
    const password = user.password.value

    if (email === '') {
      setErrorEmail(true)
    }
    if (password === '') {
      setErrorPassword(true)
    }
    if (email !== '' && password !== '') {
      console.log('todo OK')
      setAuth(true)
      setLoading(false)
      setUserState({
        id: '',
        username: '',
        email
      })
      navigate('/home')
    }

  }

  function handleClickRegister() {
    navigate('/register')
  }

  function handleChange(e) {
    const field = e.target.name
    const value = e.target.value
    setUser({
      ...user,
      [field]: {
        value: value,
        setError: user[field].setError
      }
    })
    user[field].setError(false)
  }

  function getInputClassName(errorState) {
    return `${errorState ? 'input-auth-invalid' : ''} input-auth`
  }

  return (
    <form className='form-auth' onSubmit={handleSubmit} >
      <div>
        {errorEmail && <p className='text-red-500 mb-1'>Campo requerido *</p>}
        <input
          name='email'
          className={getInputClassName(errorEmail)}
          type='text'
          placeholder='Mail...'
          autoFocus
          value={user.email.value}
          onChange={handleChange}
          onFocus={handleFocus} />
      </div>
      <div>
        {errorPassword && <p className='text-red-500 mb-1'>Campo requerido *</p>}
        <input
          name='password'
          className={getInputClassName(errorPassword)}
          type='password'
          placeholder='Contaseña...'
          value={user.password.value}
          onChange={handleChange}
          onFocus={handleFocus} />
      </div>
      <Button className='log' type='submit'>Iniciar Secion</Button>
      <Button className='reg' onClick={handleClickRegister} type='button' >Registrarse</Button>
    </form>
  )
}

export default FormLogin