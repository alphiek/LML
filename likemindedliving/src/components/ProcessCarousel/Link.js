import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FadeIn } from '../animations/FadeIn'
import Flex from '../containers/Flex'
import { LinkStyle } from '../../global/Links/LinkStyles'


export const LinkWrapper = styled(Flex)`
  background: ${props => props.bgColor};
  text-align: center;
  line-height: 140%;
  padding: 1rem;
  border-radius: 4px;
  transition: all .3s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(75, 74, 104, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  :hover {
    box-shadow: 0 25px 25px -15px rgba(75, 74, 104, 0.2);
    transform: scale(1.02);
    transform: translate(0, -0.1em);
  }
  @media (max-width: 1180px) {
    padding: 1rem;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1em;
  }
  `

const Link = ({ link }) => {
    return (
        <FadeIn>
                <LinkWrapper justifycenter alignCenter
                  bgColor={link.bgColor}>
                    <LinkStyle
                        color={link.color}
                        href={link.url}
                        aria-label={`Link to ${link.name}`}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        {link.name}
                    </LinkStyle>
                </LinkWrapper>
        </FadeIn>
    )
}


export default Link

Link.propTypes = {
  link: PropTypes.objectOf(PropTypes.string).isRequired
}