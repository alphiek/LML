import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icons from '../../Icons/Icons'

const SideDrawerButton = styled.button`
   display: flex;
   @media(min-width: 1181px) {
    display: none;
 }
`

const SideDrawerToggle = ({ click }) => (
  <SideDrawerButton onClick={click}>
    <Icons name='burger' />
  </SideDrawerButton>
)

export default SideDrawerToggle

SideDrawerToggle.propTypes = {
  click: PropTypes.func.isRequired
}