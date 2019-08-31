import React from 'react'
import styled from 'styled-components'
import { IconContainer } from '../components/containers/Containers'

const Icon = styled.div`
  width: 1.2em;
  height: 1.2em;
  border 2px solid #F9D1B7;
  border-radius: 50%;
`

const HousemateIcons = () => (
    <IconContainer justifyBetween>
        <Icon />
        <Icon />
        <Icon />
    </IconContainer>

)

export default HousemateIcons