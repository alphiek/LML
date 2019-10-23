import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { FadeIn } from "../Animations/keyframes"
import { fullfixed } from "../Utilities/position"

const Backdrop = ({ click, hide }) => (
  <BackdropCover
    onClick={e => {
      e.preventDefault()
      click()
    }}
    hide={hide}
  />
)

export default Backdrop

Backdrop.propTypes = {
  click: PropTypes.func.isRequired,
  hide: PropTypes.string,
}

export const BackdropCover = styled.div`
  ${fullfixed({})};
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
  animation: ${FadeIn} 0.2s ease-in-out;
  @media (min-width: 1181px) {
    display: ${props => (props.hide ? "none" : "block")};
  }
`
