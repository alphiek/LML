import React from 'react'
import Hover from './Hover'
import { LinkStyle, ButtonWrapper } from './LinkStyles'




const PageLink = ({ link, color, mTop }) => {
    return (
        <Hover color={color}>
            <ButtonWrapper mTop={mTop} bgColor={link.bgColor}>
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
        </Hover>
    )
}

export default PageLink