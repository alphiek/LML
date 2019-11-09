import React from 'react'
import PropTypes from 'prop-types'

import HeadlineTwo from '../HeadlineTwo/HeadlineTwo'
import ProcessContainer from '../ProcessCarousel/ProcessContainer'
import Housemate from '../Housemate/Housemate'
import Algorithm from '../Algorithm/Algorithm'
import PressReel from '../PressReel/PressReel'
import IdealChoice from '../IdealChoice/IdealChoice'
import Testimonial from '../Testimonial/Testimonial'
import Carousel from '../Carousel/Carousel'
import { SlideShow } from '../Slideshow/Slideshow'

const TenantTwo = ({ name }) => {
  return (
    <>
      <HeadlineTwo name={name} />
      <SlideShow />
      <ProcessContainer name={name} />
      <Carousel name="properties" />
      <Housemate />
      <Algorithm />
      <PressReel />
      <IdealChoice />
      <Testimonial name={name} />
      <Carousel name="blogs" />
    </>
  )
}

export default TenantTwo

TenantTwo.propTypes = {
  name: PropTypes.string.isRequired,
}
