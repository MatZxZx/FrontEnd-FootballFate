import "./Form.css"
import { useState } from "react"

export function Form(){

    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(name == "" || pass == ""){

            setError(true)
            return

        }

        setError(false)

    }

    return(

        <section>

            <h1>Login</h1>

            <form className="form"
            onSubmit={handleSubmit}
            >

                <input type="text" className="input"
                
                value={name} onChange={e => setName(e.target.value)}

                />
                <input type="password" className="input" 
                
                
                value={pass} onChange={e => setPass(e.target.value)} 

                />
                <button>Iniciar Sesión</button>

            </form>

            {error && <p>Complete todos los campos e intente de nuevo.</p>}
        
        </section>

    )

}
