import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Spinner from "react-spinkit"
import Portal from "../containers/Portal"
import Backdrop from "../containers/Backdrop"
import { Fixed } from "../containers/Containers"
import Flex from "../containers/Flex"

const Modal = ({ url, title, click }) => {
  const [loading, setLoading] = useState(true)

  const removeLoader = () => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }

  return (
    <Portal>
      <ModalContainer zIndex={99}>
        <ModalWrapper justifyCenter alignCenter column>
          {loading && (
            <Loader justifyCenter alignCenter>
              <Spinner name="ball-clip-rotate-multiple" fadeIn="none" />
            </Loader>
          )}
          <ModalWindow>
            <iframe
              title={title}
              width="100%"
              height="100%"
              src={url}
              onLoad={removeLoader}
              allowFullScreen
            />
          </ModalWindow>
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
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const ModalContainer = styled(Fixed)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled(Flex)`
  position: relative;
  z-index: 101;
  width: 85%;
  height: 85%;
  background-color: white;
`

const ModalWindow = styled.div`
  width: 100%;
  height: 100%;
`

const Loader = styled(Flex)`
  width: 100%;
  height: 100%;
  position: absolute;
`
