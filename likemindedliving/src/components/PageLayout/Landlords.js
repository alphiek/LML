import React from "react"
import PropTypes from "prop-types"

import DisplayLanding from "./DisplayLanding"
import Headline from "../Headline/Headline"
import LandlordS1 from "../LandlordS1/LandlordS1"
import Contracts from "../Contracts/Contracts"
import Clients from "../Clients/Clients"
import Payments from "../Payments/Payments"
import ProcessContainer from "../ProcessCarousel/ProcessContainer"
import PressReel from "../PressReel/PressReel"
import Testimonial from "../Testimonial/Testimonial"
import WPCarousel from "../WPCarousel/WPCarousel"

const Landlords = ({ name }) => {
  return (
    <>
      <DisplayLanding>
        <Headline name={name} />
        <LandlordS1 />
      </DisplayLanding>
      <ProcessContainer name={name} />
      <Contracts />
      <Clients />
      <Payments />
      <PressReel />
      <Testimonial name={name} />
      <WPCarousel name="landlordBlogs" />
    </>
  )
}

export default Landlords

Landlords.propTypes = {
  name: PropTypes.string.isRequired,
}
