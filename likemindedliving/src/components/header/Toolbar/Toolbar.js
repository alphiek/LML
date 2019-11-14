import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import HomeIcon from "../../Links/HomeIcon"
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle"
import GetLinks from "../GetLinks"

const Spacer = styled.div`
  flex: 1;
`

const ToolbarNavItems = styled.div`
  @media (max-width: 1180px) {
    display: none;
  }
`

const Toolbar = ({ toggleHandler }) => {
  return (
    <>
      <HomeIcon />
      <Spacer />
      <ToolbarNavItems>
        <ul>
          <GetLinks />
        </ul>
      </ToolbarNavItems>
      <SideDrawerToggle click={toggleHandler} />
    </>
  )
}

export default Toolbar

Toolbar.propTypes = {
  toggleHandler: PropTypes.func.isRequired,
}
