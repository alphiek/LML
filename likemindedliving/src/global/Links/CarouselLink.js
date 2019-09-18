import React from 'react'
import { LinkStyle } from './LinkStyles'


export const CarouselLink = ({ link }) => {
    return (
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
    )
}

