import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Portal from "../Portal"
import Backdrop from "../Backdrop"
import { Fixed } from '../Containers'
import Flex from '../Flex'

const ModalContainer = styled(Fixed)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled(Flex)`
  z-index: 101;
  width: 85%;
  height: 85%;
  background-color: white;
`

const ModalWindow = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 80%;
`

const Modal = ({ children, click }) => {
  return (
    <Portal>
      <ModalContainer zIndex={99}>
        <ModalWrapper justifyCenter alignCenter column>
          <ModalWindow>{children}</ModalWindow>
          <button onClick={click}>Close the Modal</button>
        </ModalWrapper>
        <Backdrop click={click} />
      </ModalContainer>
    </Portal>
  )
}

export default Modal

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  click: PropTypes.func.isRequired,
}
