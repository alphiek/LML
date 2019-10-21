import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
`

const ImageWrapper = ({ children }) => {
  return (
    <ImageDiv>
      {children}
    </ImageDiv>
  )
}

export default ImageWrapper

ImageWrapper.propTypes = {
  children: PropTypes.node.isRequired
}