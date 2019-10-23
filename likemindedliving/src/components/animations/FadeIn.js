import React from "react"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

export const FadeIn = ({ children, delay }) => {
  return (
    <Fade up delay={delay}>
      {children}
    </Fade>
  )
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
}
