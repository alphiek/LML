import React from 'react'
import Hover from './Hover'
import { NavLinkStyle } from './LinkStyles'

import styled from 'styled-components'

const NavLink = styled.a`
  padding: 0 1.5em;
  @media (max-width: 480px) {
      padding: 0;
  }
  
`

const LinkList = ({ link }) => {
    return (
        <Hover color='#f9f5f5' margin='50%'>
            <NavLinkStyle>
                    <NavLink
                        href={link.url}
                        aria-label={`Link to ${link.name}`}
                        target='blank'
                        rel='noopener noreferrer'
                    >{link.name}</NavLink>
            </NavLinkStyle>
        </Hover>
    )
}

export default LinkList
