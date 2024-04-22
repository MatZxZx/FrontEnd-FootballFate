import './button.css'

function Button({ className, onClick, children, ...props }) {

  function handleClick() {
    onClick()
  }

  return (
    <button onFocus={() => console.log('hola')} className={`btn-auth ${className}`} onClick={handleClick} {...props}>
      {children}
    </button>
  )
}

export default Button