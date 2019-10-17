import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { updateStyle, updateNext, updatePrevious } from './styleHelpers'
import { CenterWrapperProcess } from '../containers/Containers'
import SlideImages from './SlideImages'
import LandlordSlideImages from './LandlordSlideImages'
import StepText from './StepText'
import Pagination from './Pagination'
import Link from './Link'
import Arrows from './Arrows'


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
        <CenterWrapperProcess>
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
        </CenterWrapperProcess>
    )
}

export default SlideContainer

SlideContainer.propTypes = {
    copy: PropTypes.objectOf(PropTypes.string).isRequired,
    landlord: PropTypes.bool.isRequired,
    link: PropTypes.objectOf(PropTypes.string).isRequired
}