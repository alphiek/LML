import React from 'react'
import styled from 'styled-components'
import { FadeIn } from '../animations/FadeIn'
import Flex from '../containers/Flex'
import Hover from '../../global/Links/Hover'
import { LinkStyle } from '../../global/Links/LinkStyles'


export const LinkWrapper = styled(Flex)`
  width: 100%;
  text-align: center;
  background: ${props => props.bgColor};
  padding: 0.5em 2em;
  margin: 0.5em 0;
  border-radius: 0.35em;
  `

const Link = ({ link }) => {
    return (
        <FadeIn>
            <Hover>
                <LinkWrapper justifycenter
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