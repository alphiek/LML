import React from 'react'
import { useSpring, config } from 'react-spring'
import { NavContainer } from '../containers/Containers'


export const NavDropdown = ({ children }) => {
    const props = useSpring({
      config: config.default,
      to: ({top: 0}),
      from: ({top: -30 })
    })
    return (
      <NavContainer style={props}>
      {children}
      </NavContainer>
    )
  }