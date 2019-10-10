import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const HomeLink = () => {
    return (
        <Wrapper>
            <Link
                style={{ display: 'flex' }}
                to='/'
                aria-label={`Link to home page`}>
                <Logo />
            </Link>
            <p className='name'>Like-Minded Living</p>
        </Wrapper>

    )
}

export default HomeLink