import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { HoverPattern, HoverWrapper } from "../Patterns/HoverPattern"
import { Bounce } from "../Animations/keyframes"

const Link = styled.a`
  padding: 0 1.2rem;
  color: #1e1d42;
  @media (max-width: 1180px) {
    padding: 0;
  }
`

export const NavLinkStyle = styled.li`
  position: relative;
  :hover {
    animation: ${Bounce} 0.2s ease-out 2;
  }
  @media (max-width: 1180px) {
    text-align: right;
  }
`

const NavLinks = ({ link }) => {
  return (
    <HoverWrapper>
      <NavLinkStyle>
        <Link
          href={link.url}
          aria-label={`Link to ${link.name}`}
          target="blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </Link>
      </NavLinkStyle>
      <HoverPattern />
    </HoverWrapper>
  )
}

export default NavLinks

NavLinks.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}
