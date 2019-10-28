import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import sideDrawerPtn from "../../images/sideDrawerPtn.svg"
import housemateBG from "../../images/housemateBG.svg"
import footerBG from "../../images/footerBG.svg"
import testBG from "../../images/TestBG.svg"
import stepsBG from "../../images/StepsBG.svg"

const Patterns = ({ name }) => {
  switch (name) {
    case "sideDrawerPattern":
      return <LazyLoadComponent><SideDrawerPattern src={sideDrawerPtn} alt="background pattern" /></LazyLoadComponent>
    case "housematePattern":
      return <LazyLoadComponent><HouseMatePattern src={housemateBG} alt="background pattern" /></LazyLoadComponent>
    case "footerPattern":
      return <LazyLoadComponent><FooterPattern src={footerBG} alt="background pattern" /></LazyLoadComponent>
    case "testimonialPattern":
      return <LazyLoadComponent><TestimonialPattern src={testBG} alt="background pattern" /></LazyLoadComponent>
    case "processPattern":
      return <LazyLoadComponent><ProcessPattern src={stepsBG} alt="background pattern" /></LazyLoadComponent>
    default:
  }
}

export default Patterns

Patterns.propTypes = {
  name: PropTypes.string.isRequired,
}

const SideDrawerPattern = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  object-fit: cover;
  object-position: 50% 50%;
`

const HouseMatePattern = styled.img`
  position: absolute;
  width: 1920px;
  min-width: 1920px;
  top: -40px;
  @media (max-width: 1180px) {
    min-width: 2800px;
  }
  @media (max-width: 768px) {
    min-width: 2850px;
  }
  @media (max-width: 480px) {
    min-width: 3000px;
  }
`

const FooterPattern = styled.img`
  position: absolute;
  min-width: 1920px;
  bottom: 0;
  left: 0;
`

const TestimonialPattern = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
`

export const ProcessPattern = styled.img`
  position: absolute;
  width: 1920px;
  min-width: 1920px;
  top: -40px;
  @media (max-width: 1180px) {
    min-width: 2600px;
    top: -125px;
  }
`
