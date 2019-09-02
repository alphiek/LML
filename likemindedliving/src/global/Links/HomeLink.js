import React from 'react'
import { Link } from 'gatsby'

import Logo from '../../images/Logo'

const HomeLink = () => {
    return (
        <Link
            to='/'
            aria-label={`Link to home page`}>
            <Logo />
        </Link>
    )
}

export default HomeLink