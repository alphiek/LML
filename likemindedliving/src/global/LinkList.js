import React from 'react'
import Hover from './Hover'

const LinkList = ({ link }) => {
    return (
        <Hover>
            <li>
                <a
                    href={link.url}
                    aria-label={`Link to ${link.name}`}
                    target='blank'
                    rel='noopener noreferrer'
                >{link.name}</a>
            </li>
        </Hover>
    )
}

export default LinkList
