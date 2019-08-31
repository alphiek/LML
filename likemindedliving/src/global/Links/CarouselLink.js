import React from 'react'
import Hover from '../Hover'
import styled from 'styled-components'

const LinkStyle = styled.a`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  width: auto;
  padding: 1.5em;
  border-radius: 0.35em;
`

export const CarouselLink = ({ link }) => {
    return (
        <Hover>
            <div>
            <LinkStyle
                    color={link.color}
                    bgColor={link.bgColor}
                    href={link.url}
                    aria-label={`Link to ${link.name}`}
                    rel='noopener noreferrer'
                    target='_blank'
                >
                {link.name}
            </LinkStyle>         
            </div>              
        </Hover>
    )
}

