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

const PageLink = ({ link }) => {
    return (
        <Hover>
            <div style={{ marginTop: '2em'}}>
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

export default PageLink