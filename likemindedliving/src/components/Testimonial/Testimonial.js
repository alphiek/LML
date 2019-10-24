import React from "react"
import PropTypes from "prop-types"

import TestimonialCard from "./TestimonialCard"
import { H2, Body } from "../Text/Text"
import {
  SubTextWrapper,
  TestimonialContainer,
  FullSection,
  HeadingContainer,
  HeadingWrapper,
} from "../Containers/Containers"

import Icons from "../Icons/Icons"

const Testimonial = ({ copy }) => {
  let data = copy
  let testimonial = Object.entries(copy.testimonial)
  let cards = testimonial.map((item, index) => (
    <TestimonialCard key={index} copy={item} />
  ))

  return (
    <>
      <FullSection>
        <HeadingContainer>
          <HeadingWrapper>
            <H2 color={data.color}>{data.h2}</H2>
            <Icons name="dividerShort" fill={data.divider} />
            <SubTextWrapper>
              <Body>{data.p1}</Body>
            </SubTextWrapper>
          </HeadingWrapper>
        </HeadingContainer>
        <TestimonialContainer>{cards}</TestimonialContainer>
      </FullSection>
    </>
  )
}

export default Testimonial

Testimonial.propTypes = {
  copy: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    h2: PropTypes.string.isRequired,
    p1: PropTypes.string.isRequired,
    testimonial: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
}
