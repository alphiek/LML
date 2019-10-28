import React from "react"
import PropTypes from "prop-types"
import Blob from "../Shapes/Blob"
import Illustration from "./Illustration"
import { Wrapper } from "../Containers/Containers"

const IllustrationWrapper = ({ name, image, fill, justify }) => {
  return (
    <Wrapper justify={justify}>
      <Blob fill={fill} name={name}>
        <Illustration name={image} />
      </Blob>
    </Wrapper>
  )
}

export default IllustrationWrapper

IllustrationWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fill: PropTypes.string,
  justify: PropTypes.string.isRequired,
}
