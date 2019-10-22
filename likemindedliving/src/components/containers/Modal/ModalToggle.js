import React from "react"
import PropTypes from "prop-types"

const ModalToggle = ({ click }) => (
  <button onClick={click}>Open the Modal</button>
)

export default ModalToggle

ModalToggle.propTypes = {
  click: PropTypes.func.isRequired,
}
