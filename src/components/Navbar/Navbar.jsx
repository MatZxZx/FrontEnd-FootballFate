import { useState, useEffect } from 'react'
import './navbar.css'
// import {  } from '@flaticon/flaticon-uicons'
function Button({ type, id, className, ripple, onClick, style, children }) {

  useEffect(() => {
    const btnRipple = document.querySelectorAll('.btn-ripple')
    btnRipple.forEach((btn) => {
      btn.onclick = ({ pageX, pageY, currentTarget }) => {
        let x = (pageX - currentTarget.offsetLeft) * 100 / currentTarget.offsetWidth
        let y = (pageY - currentTarget.offsetTop) * 100 / currentTarget.offsetHeight
        const ripple = document.createElement('span')
        const rippleColor = btn.CDATA_SECTION_NODE.riplee || '#fff'
        ripple.classList.add('ripple-effect')
        ripple.style.background = rippleColor
        btn.appendChild(ripple)
        ripple.style.left = x + '%'
        ripple.style.top = y + '%'
        setTimeout(() => {
          ripple.remove();
        }, 700)
      }
    })
  }, [])

  return (
    <button
      className={`btn btn-ripple ${className ? className : ''}`}
      type={type ? type : 'button'}
      id={id}
      data-ripple={ripple}
      onClick={onClick}
      style={style}>
      {children}
    </button>
  )
}

const icons = [
  <i className="fa-solid fa-right-from-bracket"></i>,
  <i key={0} className="cursor-pointer fa-solid fa-user"></i>,
  <i key={1} className="fi fi-ss-queue-alt"></i>,
  <i key={2} className="cursor-pointer fa-solid fa-house"></i>,
  <i key={3} className="fi fi-sr-convert-shapes"></i>,
  <i key={4} className="cursor-pointer fa-solid fa-trophy"></i>,
  <i className="fi fi-sr-rank"></i>,
]

function IconNavbar({ value, className, icon, onClick }) {
  return (
    <div onClick={() => onClick(value)} className={`${className}`}>
      <Button>
        { icon }
      </Button>
    </div>
  )
}
function Navbar() {

  const [selectedIcon, setSelectedIcon] = useState(0)

  return (
    <div className='fixed h-full max-w-max text-2xl text-white flex items-center justify-center bg-[#202020] py-4 px-4'>
      <div className='flex flex-col items-center'>
        {
          icons.map((icon, i) => {
            return selectedIcon === i ? <IconNavbar value={i} key={i} className='navbar-selected-icon' icon={icon} onClick={setSelectedIcon} /> : <IconNavbar value={i} key={i} className='' icon={icon} onClick={setSelectedIcon} />
          })
        }
      </div>
    </div>
  )
}

export default Navbar