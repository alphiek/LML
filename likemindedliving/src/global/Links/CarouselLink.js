import React from 'react'
import Hover from './Hover'
import { LinkStyle } from './LinkStyles'
import { colors } from '../../global/colors'


export const CarouselLink = ({ link }) => {
    
    let hoverColor;

    if (link.name.includes('blog')) {
        hoverColor = colors.lilac
    } else if (link.name.includes('properties')) {
        hoverColor = colors.mint
    }

    return (
        <Hover color={hoverColor}>
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

