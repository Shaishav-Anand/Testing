import React from 'react'
import { Link ,NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='nav'>
     <ul className='menu'>
      <li><NavLink style={{ textDecoration: 'none'}} to="/">Home</NavLink></li>
      <li><NavLink style={{ textDecoration: 'none'}} to="shirts">Shirts</NavLink></li>
      <li><NavLink style={{ textDecoration: 'none'}} to="jeans">Jeans</NavLink></li>
      <li><NavLink style={{ textDecoration: 'none'}} to="shoes">Shoes</NavLink></li>
     </ul>
    </div>
  )
}
