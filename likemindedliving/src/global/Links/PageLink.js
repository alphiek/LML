import React from 'react'
import Hover from '../Hover'

const PageLink = ({ link }) => {
    return (
        <Hover>
                <a
                    href={link.url}
                    aria-label={`Link to ${link.name}`}
                    rel='noopener noreferrer'
                >{link.name}</a>
        </Hover>
    )
}

export default PageLink