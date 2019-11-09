import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TenantProcessIllustration from '../Illustrations/TenantProcessIllustration'
import LandlordProcessIllustration from '../Illustrations/LandlordProcessIllustration'

import {
  CenterWrapperProcess,
  ProcessPaginationContainer,
} from '../Containers/Containers'

import StepText from './StepText'
import Pagination from './Pagination'
import ModalControl from '../Modal/ModalControl'
import Arrows from './Arrows'
import { updateStyle, updateNext, updatePrevious } from './styleHelpers'

const SlideContainer = ({ copy, link, name }) => {
  const [currentSlide, updateSlide] = useState(1)

  let content = copy[currentSlide]
  let totalSlides = Object.keys(copy).length
  let pagination = Object.keys(copy)
  let slides

  if (name === 'landlord') {
    slides = <LandlordProcessIllustration slide={Number(currentSlide)} />
  } else {
    slides = <TenantProcessIllustration slide={Number(currentSlide)} />
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
      <StepText content={content} currentSlide={currentSlide} name={name} />
      <ProcessPaginationContainer>
        <Pagination
          pagination={pagination}
          updateStyle={updateStyle}
          currentSlide={currentSlide}
          updateSlideHandler={updateSlideHandler}
        />
        <ModalControl link={link} width="100%" />
        <Arrows
          updatePrevious={updatePrevious}
          updateNext={updateNext}
          updateSlideHandler={updateSlideHandler}
          currentSlide={currentSlide}
          totalSlides={totalSlides}
        />
      </ProcessPaginationContainer>
    </CenterWrapperProcess>
  )
}

export default SlideContainer

SlideContainer.propTypes = {
  copy: PropTypes.objectOf(PropTypes.string).isRequired,
  name: PropTypes.string,
  link: PropTypes.objectOf(PropTypes.string).isRequired,
}
