import React from "react"
import { Spring } from "react-spring/renderprops"
import PropTypes from "prop-types"

import { SideDrawerContainer, SideDrawerListWrapper } from './sideDrawerStyles'
import Patterns from "../../Patterns/Patterns"
import GetLinks from "../GetLinks"


const SideDrawer = ({ show, items }) => {
  return (
    <Spring from={{ right: -1000 }} to={{ right: show ? 0 : -1000 }}>
      {props => (
        <SideDrawerContainer style={props}>
          <Patterns name="sideDrawerPattern" />
          <SideDrawerListWrapper>
            <GetLinks items={items} />
          </SideDrawerListWrapper>
        </SideDrawerContainer>
      )}
    </Spring>
  )
}

export default SideDrawer

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
