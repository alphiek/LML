import React from 'react'
import { LinkStyle, ButtonWrapper } from './LinkStyles'


const PageLink = ({ link, color }) => {
    return (
            <ButtonWrapper bgColor={link.bgColor}>
            <LinkStyle
                    color={link.color}
                    href={link.url}
                    aria-label={`Link to ${link.name}`}
                    rel='noopener noreferrer'
                    target='_blank'
                >
                {link.name}
            </LinkStyle>         
            </ButtonWrapper>
    )
}

export default PageLink