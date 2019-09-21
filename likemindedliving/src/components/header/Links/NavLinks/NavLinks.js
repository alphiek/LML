import React from 'react'
import styled from 'styled-components'

import { HoverPattern, HoverWrapper } from './HoverPattern'
import { Bounce } from '../../../animations/keyframes'


const Link = styled.a`
  padding: 0 1.2rem;
  @media (max-width: 1024px) {
      padding: 0;
  }  
`

export const NavLinkStyle = styled.li`
  position: relative;
  :hover {
    animation: ${Bounce} 0.2s ease-out 2;
  }
  @media (max-width: 1024px) {
    text-align: right;
} 
`

const NavLinks = ({ link, color }) => (
    <HoverWrapper>
        <NavLinkStyle>
            <Link
                href={link.url}
                aria-label={`Link to ${link.name}`}
                target='blank'
                rel='noopener noreferrer'
            >{link.name}</Link>
        </NavLinkStyle>
        <HoverPattern color={color} />
    </HoverWrapper>
)

export default NavLinks