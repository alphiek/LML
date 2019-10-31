import React from "react"
import PropTypes from "prop-types"

import DisplayLanding from "./DisplayLanding"
import Headline from "../Headline/Headline"
import PropertySearch from "../PropertySearch/PropertySearch"
import ProcessContainer from "../ProcessCarousel/ProcessContainer"
import Housemate from "../Housemate/Housemate"
import Algorithm from "../Algorithm/Algorithm"
import PressReel from "../PressReel/PressReel"
import IdealChoice from "../IdealChoice/IdealChoice"
import Testimonial from "../Testimonial/Testimonial"
import WPCarousel from "../WPCarousel/WPCarousel"

const Tenants = ({ name }) => {
  return (
    <>
      <DisplayLanding>
        <Headline name={name} />
        <PropertySearch />
      </DisplayLanding>
      <ProcessContainer name={name} />
      <WPCarousel name="properties" />
      <Housemate />
      <Algorithm />
      <PressReel />
      <IdealChoice />
      <Testimonial name={name} />
      <WPCarousel name="blogs" />
    </>
  )
}

export default Tenants

Tenants.propTypes = {
  name: PropTypes.string.isRequired,
}
