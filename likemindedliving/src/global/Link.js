import React from 'react'

const Link = ({ link }) => {
    return (
        <a
        href={link.url}
        aria-label={`Link to ${link.name}`}
        target='blank'
        rel='noopener noreferrer'
        >{link.name}</a>
    )
}

export default Link
