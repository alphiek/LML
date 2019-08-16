import React from 'react'
import styled from 'styled-components'

import Link from '../../global/Link'

const DesktopMenuContainer = styled.ul`
  display: flex;
  width: 35em;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

const DesktopView = ({ items }) => {
    let data = items.map(e => <li key={e.name}><Link link={e} /></li>)
    return (
        <DesktopMenuContainer>
            <li><a href='www'>landlords & estate agents</a></li>
            {data}
        </DesktopMenuContainer>
    )
}

export default DesktopView
