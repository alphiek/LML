import React from 'react'
import PropTypes from 'prop-types'
import BurgerIcon from './BurgerIcon'
import styled from 'styled-components'

const SideDrawerButton = styled.button`
   display: flex;
   @media(min-width: 1181px) {
    display: none;
 }
`

const SideDrawerToggle = ({ click }) => (
  <SideDrawerButton onClick={click}>
    <BurgerIcon />
  </SideDrawerButton>
)

export default SideDrawerToggle

SideDrawerToggle.propTypes = {
  click: PropTypes.func.isRequired
}