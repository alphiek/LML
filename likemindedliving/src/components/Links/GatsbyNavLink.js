import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { HoverPattern, HoverWrapper } from '../Patterns/HoverPattern'
import { Bounce } from '../Animations/keyframes'

const GatsbyLink = styled(Link)`
  padding: 0 1.2rem;
  color: #1e1d42;
  display: block;
  @media (max-width: 1180px) {
    padding: 0;
    padding: 1.5rem 0;
  }
  @media (max-width: 820px) {
    padding: 4.5vh 0;
  }
`

export const NavLinkStyle = styled.div`
  position: relative;
  :hover {
    animation: ${Bounce} 0.2s ease-out 2;
  }
  @media (max-width: 1180px) {
    text-align: right;
  }
`

const GatsbyNavLink = ({ name, url }) => {
  return (
    <HoverWrapper>
      <NavLinkStyle>
        <GatsbyLink
          to={url}
          aria-label={`Link to ${name}`}
          activeStyle={{ display: 'none' }}
        >
          {name}
        </GatsbyLink>
      </NavLinkStyle>
      <HoverPattern />
    </HoverWrapper>
  )
}

export default GatsbyNavLink

GatsbyNavLink.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
