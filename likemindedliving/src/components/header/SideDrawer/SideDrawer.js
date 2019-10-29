import React from "react"
import PropTypes from "prop-types"
import { Spring, animated as a } from "react-spring/renderprops"
import styled from "styled-components"

import Patterns from "../../Patterns/Patterns"
import GetLinks from "../GetLinks"
import { colors } from "../../Utilities/colors"

const SideDrawerContainer = styled(a.nav)`
  height: 100vh;
  max-height: 100vh;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  background: ${colors.mint};
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  display: block;
  z-index: 200;
  @media (min-width: 1181px) {
    display: none;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`
const SideDrawerListWrapper = styled.ul`
  height: 100vh;
  flex-direction: column;
  align-items: flex-end;
  text-align: left;
  margin: 2rem 1rem;
  @media (max-height: 460px) and (orientation: landscape) {
    justify-content: space-evenly;
    height: 100%;
    margin: auto 1rem;
  }
`

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
