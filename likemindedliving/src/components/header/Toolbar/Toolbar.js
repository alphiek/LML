import React from 'react'
import styled from 'styled-components'

import HomeLink from '../Links/HomeLink/HomeLink'
import NavLinks from '../Links/NavLinks/NavLinks'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle'


const Spacer = styled.div`
  flex: 1;
`

const ToolbarNavItems = styled.div`
  @media (max-width: 1024px) {
  display: none;
}
`

const Toolbar = ({ toggleHandler, items }) => {

    let data = items.map(e =>
        <NavLinks key={e.name} link={e} />
    )

    return (
            <header>
                <nav>
                    <HomeLink />
                    <Spacer />
                    <ToolbarNavItems>
                        <ul>
                            {data}
                        </ul>
                    </ToolbarNavItems>
                    <SideDrawerToggle click={toggleHandler} />
                </nav>
            </header>
    )
}

export default Toolbar