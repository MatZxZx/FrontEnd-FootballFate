import './formLogin.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeUser } from '../../redux/features/auth/authSlice'
import Button from '../ButtonAuth/Button'
import { loginRequest } from '../../services/auth'

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

  const dispatch = useDispatch()
  const navigate = useNavigate()

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
      // const res = await loginRequest()
      // if (res.status === 'ok') {
      // navigate('/home')
      // }
      console.log('todo OK')
    }
    dispatch(changeUser({
      email,
      password
    }))
  }

  function handleClickRegister() {
    navigate('/auth/register')
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

  const inputUsernameClassName = `${errorEmail ? 'input-auth-invalid' : ''} input-auth`
  const inputPasswordClassName = `${errorPassword ? 'input-auth-invalid' : ''} input-auth`

  return (
    <form className='form-auth' onSubmit={handleSubmit} >
      <div>
        {errorEmail && <p className='text-red-500 mb-1'>Campo requerido *</p>}
        <input
          name='email'
          className={inputUsernameClassName}
          type='text'
          placeholder='Mail...'
          autoFocus
          value={user.email.value}
          onChange={handleChange} />
      </div>
      <div>
        {errorPassword && <p className='text-red-500 mb-1'>Campo requerido *</p>}
        <input
          name='password'
          className={inputPasswordClassName}
          type='password'
          placeholder='Contaseña...'
          value={user.password.value}
          onChange={handleChange} />
      </div>
      <Button className='log' type='submit'>Iniciar Secion</Button>
      <Button className='reg' onClick={handleClickRegister} type='button' >Registrarse</Button>
    </form>
  )
}

export default FormLogin