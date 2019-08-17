import React from 'react'
import Logo from './Logo'
import NavBreakpoints from './NavBreakpoints'
import { NavWrapper } from '../containers/Containers'

const Header = ({ items }) => {
  return (
    <header>
      <NavWrapper>
        <Logo />
        <NavBreakpoints items={items}/>
      </NavWrapper>
   </header>
  )
}


export default Header
