import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HomeLink from '../Links/HomeLink/HomeLink'
import NavLinks from '../Links/NavLinks/NavLinks'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle'

const Spacer = styled.div`
  flex: 1;
`

const ToolbarNavItems = styled.div`
  @media (max-width: 1180px) {
  display: none;
}
`

const Toolbar = ({ toggleHandler, items }) => {

    const docUrl = typeof document !== 'undefined' && document.URL
    const urlWithSlash = typeof docUrl != 'undefined' && `${docUrl}/`

    let data;

    if (docUrl) {
        data = items.filter(item => item.url !== docUrl || item.url !== urlWithSlash)
            .map((item, index) => <NavLinks key={index} link={item} />)
    }
    else {
        data = items.map((item, index) => <NavLinks key={index} link={item} />)
    }

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

Toolbar.propTypes = {
    toggleHandler: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}