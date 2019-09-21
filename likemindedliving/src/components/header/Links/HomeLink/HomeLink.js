import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'

const HomeLink = () => {
    return (
        <Link
            style={{ display: 'flex'}}
            to='/'
            aria-label={`Link to home page`}>
            <Logo />
        </Link>
    )
}

export default HomeLink