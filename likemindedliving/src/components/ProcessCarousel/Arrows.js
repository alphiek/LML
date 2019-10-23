import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Flex from "../Containers/Flex"

const ArrowWrapper = styled(Flex)`
  margin-top: 0.5rem;
  @media (max-width: 1180px) {
    margin-top: 30px;
  }
`

const Arrows = ({
  updateNext,
  updatePrevious,
  updateSlideHandler,
  currentSlide,
  totalSlides,
}) => {
  return (
    <ArrowWrapper justifyAround>
      <button
        style={updatePrevious(currentSlide)}
        onClick={() => updateSlideHandler(currentSlide - 1)}
      >
        Previous
      </button>
      <button
        style={updateNext(currentSlide, totalSlides)}
        onClick={() => updateSlideHandler(currentSlide + 1)}
      >
        Next
      </button>
    </ArrowWrapper>
  )
}

export default Arrows

Arrows.propTypes = {
  updateNext: PropTypes.func.isRequired,
  updatePrevious: PropTypes.func.isRequired,
  currentSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
  updateSlideHandler: PropTypes.func.isRequired,
}
