import React from 'react'
import Hover from './Hover'
import { NavLinkStyle } from './LinkStyles'

const LinkList = ({ link }) => {
    return (
        <Hover>
            <NavLinkStyle>
                <a
                    href={link.url}
                    aria-label={`Link to ${link.name}`}
                    target='blank'
                    rel='noopener noreferrer'
                >{link.name}</a>
            </NavLinkStyle>
        </Hover>
    )
}

export default LinkList
