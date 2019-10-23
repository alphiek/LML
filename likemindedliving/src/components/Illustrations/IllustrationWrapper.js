import React from "react"
import PropTypes from "prop-types"

import Blob from "../shapes/Blob"
import Illustration from "./Illustration"
import { Wrapper } from "../containers/Containers"

const IllustrationWrapper = ({ name, image, fill }) => {
  return (
    <Wrapper>
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
}
