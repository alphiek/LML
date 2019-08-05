import React from 'react'
import styled from 'styled-components'
import { linkUrls } from '../../copy/links'
import Link from '../../global/Link'

const FlexContainer = styled.ul`
  display: flex;
  width: 60vw;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

const LinkContainer = () => {
    let data = linkUrls.map(e => <li key={e.name}><Link link={e} /></li>)
    return (
        <FlexContainer>
            <li><a href='www'>landlords & estate agents</a></li>
            {data}
        </FlexContainer>
    )
}

export default LinkContainer