import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Zoom from "react-reveal/Zoom"
import Shapes from "./Shapes"

import Flex from "../Containers/Flex"


const Blob = ({ name, fill, children }) => {
  return (
    <BlobFlex alignCenter >
        {children}
      <Zoom>
        <Shapes name={name} fill={fill} />
      </Zoom>
    </BlobFlex>
  )
}

export default Blob

Blob.propTypes = {
    name: PropTypes.string.isRequired,
    fill: PropTypes.string,
    children: PropTypes.node.isRequired,
}

const BlobFlex = styled(Flex)`
 @media (max-width: 1180px) {
   justify-content: center;
 }
 @media (max-width: 480px) {
   width: 60vw;
 }
`