import React from 'react'
import styled from 'styled-components'

import { FadeIn } from '../../animations/keyframes'

const BackdropCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  z-index: 100;
  animation: ${FadeIn} 0.2s ease-in-out;
  @media (min-width: 1025px ) {
    display: none;
  }
`

const Backdrop = ({ click }) => (
    <BackdropCover onClick={click} />
)

export default Backdrop