import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../global/colors'
import TestimonialCard from './TestimonialCard'
import { H2, Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'

const TestimonialSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px 0 70px;
  background-color: ${colors.lightPeach};
`
const HeadingWrapper = styled.div`
  width: 950px;
  @media (max-width: 1180px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      justify-content: center;
  }
`

const TestimonialContainer = styled.div`
   width: 950px;
   display: flex;
   position: relative;
   justify-content: space-between;
`


const Testimonial = ({ copy }) => {
  let data = copy
  let testimonial = Object.entries(copy.testimonial)
  let cards = testimonial.map((item, index) => <TestimonialCard key={index} copy={item} />)

  console.log(data)
  console.log(testimonial)

  return (
    <>
      <TestimonialSection>
        <HeadingContainer>
          <HeadingWrapper>
            <H2 color={data.color}>{data.h2}</H2>
            <ShortDivider bottom='0' top='0' color={data.divider} width='3.5em' />
            <Body>{data.p1}</Body>
          </HeadingWrapper>
        </HeadingContainer>
        <TestimonialContainer>
        {cards}
        </TestimonialContainer>
      </TestimonialSection>
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
