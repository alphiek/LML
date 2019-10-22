import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FadeIn } from "../animations/keyframes"
import { Fixed } from "./Containers"

const Backdrop = ({ click, children, hide }) => (
  <BackdropCover
    onClick={e => {
      e.preventDefault()
      click()
    }}
    zIndex={100}
    hide={hide}
  >
    {children}
  </BackdropCover>
)

export default Backdrop

Backdrop.propTypes = {
  click: PropTypes.func.isRequired,
  children: PropTypes.node,
  hide: PropTypes.string,
}

export const BackdropCover = styled(Fixed)`
  background: rgba(0, 0, 0, 0.3);
  animation: ${FadeIn} 0.2s ease-in-out;
  @media (min-width: 1181px) {
    display: ${props => (props.hide ? "none" : "block")};
  }
`
