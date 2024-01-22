import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'inactive'} >Home</NavLink>
        </li>
        <li>
          <NavLink to='/galeria' >Galeria</NavLink>
        </li>
        <li>
          <NavLink to='/sobre-mi' >Sobre mí</NavLink>
        </li>
        <li>
          <NavLink to='/contacto' >Contacto</NavLink>
        </li>
      </ul>
    </nav>
  )
}
