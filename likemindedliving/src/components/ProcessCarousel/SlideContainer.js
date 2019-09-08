import React, { useState } from 'react'
import styled from 'styled-components'

import { updateStyle, updateNext, updatePrevious } from './styleHelpers'

import SlideImages from './SlideImages' 
import StepText from './StepText'
import Pagination from './Pagination'
import Link from './Link'
import Flex from '../containers/Flex'
import Arrows from './Arrows'

const ContentCell = styled(Flex)`
grid-area: content;
width: 100%;
@media (max-width: 1024px) {
 justify-content: center;
}
`

const SlideContainer = ({ copy, link }) => {
    const [currentSlide, updateSlide] = useState(1)

    let content = copy[currentSlide]
    let totalSlides = Object.keys(copy).length
    let pagination = Object.keys(copy)

    const updateSlideHandler = val => {
        if (val > 0 && val <= totalSlides) {
            updateSlide(val)
            updateStyle(val, currentSlide)
        } else {
            return
        }
    }
    
    return (
        <>
            <SlideImages slide={currentSlide.toString()} />
            <ContentCell aligncenter justifyCenter>
                <StepText content={content} currentSlide={currentSlide} />
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
            </ContentCell>
        </>
    )
}

export default SlideContainer