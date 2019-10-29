import React from "react"
import PropTypes from "prop-types"
import SplitText from "react-pose-text"
import { H1 } from './headlineStyles'

const H1SplitText = ({ h1, color }) => {
  const charPoses = {
    exit: { opacity: 0, y: -60 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 20,
    },
  }

  return (
    <H1 color={color}>
      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        {h1}
      </SplitText>
    </H1>
  )
}

export default H1SplitText

H1SplitText.propTypes = {
  h1: PropTypes.string.isRequired,
  color: PropTypes.string,
}
