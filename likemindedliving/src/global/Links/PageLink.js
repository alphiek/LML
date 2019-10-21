import React from 'react'
import { ButtonWrapper, Bubble } from './LinkStyles'


const PageLink = ({ link }) => {
    return (
        <ButtonWrapper
            bgColor={link.bgColor}
            color={link.color}
            colorHover={link.colorHover}>
            <a
                href={link.url}
                aria-label={`Link to ${link.name}`}
                rel='noopener noreferrer'
                target='_blank'
            >
                {link.name}
            </a>
            <Bubble bgColorHover={link.bgColorHover}/>
            <Bubble bgColorHover={link.bgColorHover}/>
            <Bubble bgColorHover={link.bgColorHover}/>
            <Bubble bgColorHover={link.bgColorHover}/>
        </ButtonWrapper>
    )
}

export default PageLink