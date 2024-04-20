import './form.css'
import { useState } from 'react'
import Button from '../ButtonAuth/Button'

function FormLogin() {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(name === '' || pass === '') {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <form className="form-auth" onSubmit={handleSubmit} >
            <input className="input-auth" type="text" placeholder='Mail...'
                value={name} onChange={e => setName(e.target.value)} />
            <input className="input-auth" type="password"  placeholder='Contaseña...'
                value={pass} onChange={e => setPass(e.target.value)} />
            <Button cls='log'>Iniciar Secion</Button>
            <Button cls='reg'>Registrarse</Button>
            {/* {error && <p>Complete todos los campos e intente de nuevo.</p>} */}
        </form>
    )
}

export default FormLogin