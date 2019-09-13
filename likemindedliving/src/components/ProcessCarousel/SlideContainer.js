import React, { useState } from 'react'
import styled from 'styled-components'

import { updateStyle, updateNext, updatePrevious } from './styleHelpers'

import SlideImages from './SlideImages'
import LandlordSlideImages from './LandlordSlideImages'
import StepText from './StepText'
import Pagination from './Pagination'
import Link from './Link'
import Flex from '../containers/Flex'
import Arrows from './Arrows'

const ContentCell = styled(Flex)`
  grid-area: content;
  width: 90%;
  position: relative;
@media (max-width: 1024px) {
 justify-content: center;
}`

const Container = styled.div`
  width: 72%;
`


const SlideContainer = ({ copy, link, landlord }) => {
    const [currentSlide, updateSlide] = useState(1)

    let content = copy[currentSlide]
    let totalSlides = Object.keys(copy).length
    let pagination = Object.keys(copy)
    let slides;

    if (landlord) {
        slides = <LandlordSlideImages slide={currentSlide.toString()} />
    } else {
        slides = <SlideImages slide={currentSlide.toString()} />
    }

    const updateSlideHandler = val => {
        if (val > 0 && val <= totalSlides) {
            updateSlide(val)
            updateStyle(val, currentSlide)
        } else {
            return
        }
    }

    return (
        <ContentCell aligncenter justifyCenter>
            {slides}
            <StepText content={content} currentSlide={currentSlide} />
            <Container>
            <Pagination
                pagination={pagination}
                updateStyle={updateStyle}
                currentSlide={currentSlide}
                updateSlideHandler={updateSlideHandler} />
            <Link link={link} />
            <Arrows
                updatePrevious={updatePrevious}
                updateNext={updateNext}
                updateSlideHandler={updateSlideHandler}
                currentSlide={currentSlide}
                totalSlides={totalSlides} />
                </Container>
        </ContentCell>      
    )
}

export default SlideContainer