import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated as a } from 'react-spring'
import styled from 'styled-components'


export const ImageDiv = styled(a.div)`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: auto;
`


const ImageWrapper = ({ children }) => {
  const props = useSpring({
    left: '10vw', from: { left: '-40vw' }
  })

  return (
    <ImageDiv style={props}>
      {children}
    </ImageDiv>
  )
}

export default ImageWrapper

ImageWrapper.propTypes = {
  children: PropTypes.node.isRequired
}