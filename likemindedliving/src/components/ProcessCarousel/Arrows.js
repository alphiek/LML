import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'

const ArrowWrapper = styled(Flex)`
  margin-top: 0.5rem;
`

const Arrows = ({ updateNext, updatePrevious, updateSlideHandler, currentSlide, totalSlides}) => {
    return (
    <ArrowWrapper justifyAround>
        <button style={updatePrevious(currentSlide)} onClick={() => updateSlideHandler(currentSlide - 1)}>Previous</button>
        <button style={updateNext(currentSlide, totalSlides)} onClick={() => updateSlideHandler(currentSlide + 1)}>Next</button>
    </ArrowWrapper>
    )
}

export default Arrows