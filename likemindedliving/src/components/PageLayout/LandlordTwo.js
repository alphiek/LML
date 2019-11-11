import React from 'react'
import PropTypes from 'prop-types'

import { LandlordSlideShow } from '../Slideshow/LandlordSlideshow'
import HeadlineTwoLandlord from '../HeadlineTwo/HeadlineTwoLandlord'
import LandlordS1 from '../LandlordS1/LandlordS1'
import Contracts from '../Contracts/Contracts'
import Clients from '../Clients/Clients'
import Payments from '../Payments/Payments'
import ProcessContainer from '../ProcessCarousel/ProcessContainer'
import PressReel from '../PressReel/PressReel'
import Testimonial from '../Testimonial/Testimonial'
import Carousel from '../Carousel/Carousel'

const LandlordTwo = ({ name }) => {
  return (
    <>
      <HeadlineTwoLandlord name={name}/>
      <LandlordSlideShow />
      <LandlordS1 />
      <ProcessContainer name={name} />
      <Contracts />
      <Clients />
      <Payments />
      <PressReel />
      <Testimonial name={name} />
      <Carousel name="landlordBlogs" />
    </>
  )
}

export default LandlordTwo

LandlordTwo.propTypes = {
  name: PropTypes.string.isRequired,
}
