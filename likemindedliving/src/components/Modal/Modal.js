import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Spinner from "react-spinkit"

import { fullfixed, fullabs, fill } from "../Utilities/position"
import Flex from "../Containers/Flex"

const Modal = ({ url, title, click, styles }) => {
  const [loading, setLoading] = useState(true)

  const removeLoader = () => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }

  return (
    <ModalContainer style={{ opacity: styles.opacity }}>
      <ModalWrapper justifyCenter alignCenter column>
        {loading && (
          <Loader justifyCenter alignCenter>
            <Spinner name="ball-clip-rotate-multiple" fadeIn="none" />
          </Loader>
        )}
        <ModalWindow>
          <iframe
            style={{ opacity: styles.opacity }}
            title={title}
            width="100%"
            height="100%"
            src={url}
            onLoad={removeLoader}
            allowFullScreen
          />
        </ModalWindow>
      </ModalWrapper>
      <BackdropCover
        onClick={e => {
          e.preventDefault()
          click()
        }}
        style={{ opacity: styles.backdrop }}
      ></BackdropCover>
    </ModalContainer>
  )
}

export default Modal

Modal.propTypes = {
  click: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
}

const ModalContainer = styled.div`
  ${fullfixed({})};
  max-height: 100vh;
  right: 0;
  bottom: 0;
  -webkit-overflow-scrolling: touch;
  overflow: scroll;
  display: flex;
  z-index: 99;
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
  ${fill({})};
`

const Loader = styled(Flex)`
  ${fullabs({})};
`

const BackdropCover = styled.div`
  ${fullfixed({})};
  background-color: #222;
  opacity: 0.5;
`
