import { useState, useEffect } from 'react'
import './navbar.css'
import useNavbar from '../../hooks/useNavbar'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import icons from './icons'

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

function IconNavbar({ value, className, icon }) {

  const { setIcon } = useNavbar()

  return (
    <div onClick={() => setIcon(value)} className={`${className}`}>
      <Button>
        { icon }
      </Button>
    </div>
  )
}
function Navbar() {

  const navbarState = useSelector(state => state.navbar)

  return (
    <div className='fixed h-full max-w-max text-2xl text-white flex items-center justify-center bg-[#202020] py-4 px-4'>
      <div className='flex flex-col items-center'>
        {
          icons.map((icon, i) => {
            
            if (navbarState.selectedIcon === navbarState.valueInactive) {
              return <Link key={icon.to} to={icon.to}>
                <IconNavbar value={i} className='' icon={icon.label} />
              </Link>
            }

            return <Link key={icon.to} to={icon.to}>
              {
                navbarState.selectedIcon === i ? <IconNavbar className='navbar-selected-icon' icon={icon.label} value={i} /> : <IconNavbar className='' icon={icon.label} value={i} />
              }
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Navbar