import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Content from './Content'

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5em;
    padding-right: 1vw;
    padding-left: 1em;
    position: fixed;
    top: 0;
    z-index: 600;
    `

const Header = ({ items }) => {
  return (
    <header>
      <NavWrapper>
        <Logo />
        <Content items={items}/>
      </NavWrapper>
   </header>
  )
}


export default Header
