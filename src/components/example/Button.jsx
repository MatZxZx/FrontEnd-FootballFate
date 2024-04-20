import { useEffect } from 'react'
import { useApp } from '../../contexts/AppContext'
import './button.css'

function Button({ text }) {
    const {user, setUser} = useApp()

    useEffect(() => {
        setUser({
            username: 'ChapyPengu',
            password: 'pengu11'
        })
    }, [])

  return (
    <button className='btn' onClick={() => alert(`El usuario es: ${user.username}`)}>{ text }</button>
  )
}

export default Button