import './button.css'


function Button({ cls, children }) {
    return(
        <button className={`btn-auth ${cls}`}>
            { children }
        </button>
    )
}

export default Button