import React from 'react'
import PropTypes from 'prop-types'
import SplitText from 'react-pose-text'

const H1SplitText = ({ h1 }) => {
  const charPoses = {
    exit: { opacity: 0, y: -60 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 20,
    },
  }

  return (
    <h1 aria-label={h1}>
      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        {h1}
      </SplitText>
    </h1>
  )
}

export default H1SplitText

H1SplitText.propTypes = {
  h1: PropTypes.string.isRequired,
}
