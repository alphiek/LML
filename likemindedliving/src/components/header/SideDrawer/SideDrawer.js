import React from "react"
import { Spring } from "react-spring/renderprops"
import PropTypes from "prop-types"

import { SideDrawerContainer, SideDrawerListWrapper } from './sideDrawerStyles'
import Patterns from "../../Patterns/Patterns"
import GetLinks from "../GetLinks"


const SideDrawer = ({ show, toggleHandler }) => {
  return (
    <Spring from={{ right: -1000 }} to={{ right: show ? 0 : -1000 }}>
      {props => (
        <SideDrawerContainer style={props}>
          <Patterns name="sideDrawerPattern" />
          <SideDrawerListWrapper>
            <GetLinks click={toggleHandler}/>
          </SideDrawerListWrapper>
        </SideDrawerContainer>
      )}
    </Spring>
  )
}

export default SideDrawer

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
}
