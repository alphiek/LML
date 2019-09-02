import React from 'react'
import HomeLink from '../../global/Links/HomeLink'
import NavBreakpoints from './NavBreakpoints'
import { NavDropdown } from '../animations/dropdown'

const Header = ({ items }) => {
  return (
    <header>
      <NavDropdown>
        <HomeLink />
        <NavBreakpoints items={items}/>
      </NavDropdown>
   </header>
  )
}


export default Header
