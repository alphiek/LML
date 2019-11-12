import React from 'react'
import PropTypes from 'prop-types'
import Icons from '../../Icons/Icons'
import { SideDrawerButton } from './sideDrawerStyles'

const SideDrawerToggle = ({ click }) => (
  <SideDrawerButton aria-label="Open navigation menu" onClick={click}>
    <Icons name="burger" />
  </SideDrawerButton>
)

export default SideDrawerToggle

SideDrawerToggle.propTypes = {
  click: PropTypes.func.isRequired,
}
