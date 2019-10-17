import React from 'react'
import { ButtonWrapper, Bubble } from './LinkStyles'


const PageLink = ({ link }) => {
    return (
        <ButtonWrapper
            bgColor={link.bgColor}
            color={link.color}>
            <a
                href={link.url}
                aria-label={`Link to ${link.name}`}
                rel='noopener noreferrer'
                target='_blank'
            >
                {link.name}
            </a>
            <Bubble />
            <Bubble />
            <Bubble />
            <Bubble />
        </ButtonWrapper>
    )
}

export default PageLink