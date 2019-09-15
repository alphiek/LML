import React from 'react'
import styled from 'styled-components'
import { FadeIn } from '../animations/FadeIn'
import Flex from '../containers/Flex'
import Hover from '../../global/Links/Hover'
import { LinkStyle } from '../../global/Links/LinkStyles'


export const LinkWrapper = styled(Flex)`
  background: ${props => props.bgColor};
  text-align: center;
  line-height: 140%;
  padding: 0.75em 2em;
  margin: 0.5em 0;
  border-radius: 0.35em;
  @media (max-width: 768px) {
    margin: 1em 0 0.5em 0;
  }
  `

const Link = ({ link }) => {
    return (
        <FadeIn>
            <Hover>
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
            </Hover>
        </FadeIn>
    )
}


export default Link