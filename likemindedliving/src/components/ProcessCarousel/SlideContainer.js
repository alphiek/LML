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
  grid-column: 3/4;
  border-radius: 8px 8px 0px 0;
  grid-row: 2;
  margin-top: -5.5em;
  padding-top: 1em;
  width: 100%;
  position: relative;
  background: white;
@media (max-width: 1024px) {
 justify-content: center;
  grid-column: 1;
  margin-top: 0;
}`

const Container = styled.div`
  width: 65%;
  @media (max-width: 480px) {
      width: 100%;
  }
`


const SlideContainer = ({ copy, link, landlord }) => {
    const [currentSlide, updateSlide] = useState(1)

    let content = copy[currentSlide]
    let totalSlides = Object.keys(copy).length
    let pagination = Object.keys(copy)
    let slides;

    if (landlord) {
        slides = <LandlordSlideImages slide={Number(currentSlide)} />
    } else {
        slides = <SlideImages slide={Number(currentSlide)} />
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