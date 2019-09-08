import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'

const ArrowWrapper = styled(Flex)`
  width: 100%;
  margin-right: 1em;
`

const Arrows = ({ updateNext, updatePrevious, updateSlideHandler, currentSlide, totalSlides}) => {
    return (
    <ArrowWrapper justifyEnd>
        <button style={updatePrevious(currentSlide)} onClick={() => updateSlideHandler(currentSlide - 1)}>Previous</button>
        <button style={updateNext(currentSlide, totalSlides)} onClick={() => updateSlideHandler(currentSlide + 1)}>Next</button>
    </ArrowWrapper>
    )
}

export default Arrows