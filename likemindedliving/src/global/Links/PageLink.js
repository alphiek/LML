import React from 'react'
import Hover from './Hover'
import { LinkStyle } from './LinkStyles'

const PageLink = ({ link, color }) => {
    return (
        <Hover color={color}>
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