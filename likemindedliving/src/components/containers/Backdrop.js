import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { fullfixed } from "../Utilities/position"

const Backdrop = ({ click, children, hide, styles }) => (
  <BackdropCover
    onClick={e => {
      e.preventDefault()
      click()
    }}
    zIndex={100}
    hide={hide}
    style={{ opacity: styles.opacity }}
  >
    {children}
  </BackdropCover>
)

export default Backdrop

Backdrop.propTypes = {
  click: PropTypes.func.isRequired,
  children: PropTypes.node,
  hide: PropTypes.string,
  styles: PropTypes.object.isRequired,
}

const BackdropCover = styled.div`
  ${fullfixed({})};
  background-color: #222;
  opacity: 0.5;
  @media (min-width: 1181px) {
    display: ${props => (props.hide ? "none" : "block")};
  }
`
