import './button.css'

function Button({ text }) {
  return (
    <button className='btn' onClick={() => alert('Me tocaste')}>{ text }</button>
  )
}

export default Button