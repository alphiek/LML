import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from '../Containers/Flex'

export const ImageDiv = styled(Flex)`
  width: 100%;
`

const ProcessImageWrapper = ({ children }) => {
  return (
    <ImageDiv justifyCenter alignCenter>
      {children}
    </ImageDiv>
  )
}

export default ProcessImageWrapper

ProcessImageWrapper.propTypes = {
  children: PropTypes.node.isRequired
}