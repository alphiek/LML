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
import Patterns from '../Patterns/Patterns'
import { testimonialCopy } from './testimonialCopy'

const Testimonial = ({ name }) => {
  let data = testimonialCopy[name]
  let testimonial = Object.entries(data.testimonial)
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
          <Patterns name='testimonialPattern' />
        </HeadingContainer>
        <TestimonialContainer>{cards}</TestimonialContainer>
      </FullSection>
    </>
  )
}

export default Testimonial

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
}

