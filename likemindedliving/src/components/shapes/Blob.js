import React from "react"
import PropTypes from "prop-types"
import Zoom from "react-reveal/Zoom"
import Shapes from "./Shapes"

import Flex from "../Containers/Flex"

const Blob = ({ name, fill, children }) => {
  return (
    <Flex>
        {children}
      <Zoom>
        <Shapes name={name} fill={fill} />
      </Zoom>
    </Flex>
  )
}

export default Blob

Blob.propTypes = {
    name: PropTypes.string.isRequired,
    fill: PropTypes.string,
    children: PropTypes.node.isRequired,
}
