import React from 'react'
import PropTypes from 'prop-types'

import TestimonialCard from './TestimonialCard'
import { H2, Body } from '../text/Text'
import { 
  SubTextWrapper, 
  TestimonialContainer, 
  FullSection, 
  HeadingContainer, 
  HeadingWrapper
 } from '../containers/Containers'
 
import { ShortDivider } from '../Dividers/Dividers'

const Testimonial = ({ copy }) => {
  let data = copy
  let testimonial = Object.entries(copy.testimonial)
  let cards = testimonial.map((item, index) => <TestimonialCard key={index} copy={item} />)

  return (
    <>
      <FullSection>
        <HeadingContainer>
          <HeadingWrapper>
            <H2 color={data.color}>{data.h2}</H2>
            <ShortDivider bottom='0' top='0' color={data.divider} width='3.5em' />
            <SubTextWrapper>
              <Body>{data.p1}</Body>
            </SubTextWrapper>
          </HeadingWrapper>
        </HeadingContainer>
        <TestimonialContainer>
          {cards}
        </TestimonialContainer>
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
    testimonial: PropTypes.objectOf(PropTypes.object).isRequired
  }).isRequired
}
