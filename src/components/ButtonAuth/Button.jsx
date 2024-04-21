import './button.css'

function Button({ className, onClick, children, ...props }) {

  return (
    <button className={`btn-auth ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button