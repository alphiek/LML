import React from 'react'
import HomeLink from '../../../global/Links/HomeLink'
import LinkList from '../../../global/Links/LinkList'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle'
import styled from 'styled-components'

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
        <LinkList key={e.name} link={e} />
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