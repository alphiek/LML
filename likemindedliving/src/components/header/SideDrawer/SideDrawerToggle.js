import React from 'react'
import BurgerIcon from '../../../images/BurgerIcon'
import styled from 'styled-components'

const SideDrawerButton = styled.button`
   display: flex;
   @media(min-width: 1023px) {
    display: none;
 }
`

const SideDrawerToggle = ({ click }) => (
    <SideDrawerButton onClick={click}>
      <BurgerIcon />
    </SideDrawerButton>
)

export default SideDrawerToggle