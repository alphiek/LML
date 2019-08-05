import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import LinkContainer from './LinkContainer'

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7.5vh;
    padding-right: 1vw;
    padding-left: 1vw;
    `

const Navbar = () => {
    return (
        <NavWrapper>
            <Logo />
            <LinkContainer/>
        </NavWrapper>
    )
}

export default Navbar