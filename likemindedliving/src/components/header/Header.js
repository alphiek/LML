import React from 'react'
import Logo from './Logo'
import NavBreakpoints from './NavBreakpoints'
import { NavContainer } from '../containers/Containers'

const Header = ({ items }) => {
  return (
    <header>
      <NavContainer>
        <Logo />
        <NavBreakpoints items={items}/>
      </NavContainer>
   </header>
  )
}


export default Header
