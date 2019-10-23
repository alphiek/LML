import React from "react"
import PropTypes from "prop-types"

import Headline from "../Headline/Headline"
import PropertySearch from "../Sections/PropertySearch"
import ProcessContainer from "../ProcessCarousel/ProcessContainer"
import HouseMate from "../Sections/HouseMate"
import Algorithm from "../Sections/Algorithm"
import PressReel from "../PressReel/PressReel"
import IdealChoice from "../Sections/IdealChoice"
import Testimonial from "../Testimonial/Testimonial"
import WPCarousel from "../WPCarousel/WPCarousel"

const Tenants = ({ copy }) => {
  return (
    <>
      <Headline copy={copy.headline} />
      <PropertySearch copy={copy.sectionOne} />
      <ProcessContainer copy={copy.process} />
      <WPCarousel copy={copy.properties} />
      <HouseMate copy={copy.sectionTwo} />
      <Algorithm copy={copy.sectionThree} />
      <PressReel copy={copy.pressReel} />
      <IdealChoice copy={copy.sectionFour} />
      <Testimonial copy={copy.testimonials} />
      <WPCarousel copy={copy.blogs} />
    </>
  )
}

export default Tenants

Tenants.propTypes = {
  copy: PropTypes.objectOf(PropTypes.object).isRequired,
}
