import React from 'react'
import Hover from './Hover'
import { LinkStyle } from './LinkStyles'


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

