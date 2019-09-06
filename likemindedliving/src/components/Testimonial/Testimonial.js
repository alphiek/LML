import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import { Body } from '../text/Text'
import { colors } from '../../global/colors'
import TestimonialCard from './TestimonialCard'
import { FadeIn } from '../animations/FadeIn'

const H2Testimonial = styled.h2`
  margin-bottom: 0.5em;
`

export const CardWrapper = styled(Flex)`
  grid-column: 2;
  grid-row: 1 / span 2;
  @media(max-width: 1024px) {
    grid-column: 1;
    grid-row: 2;
    margin-left: 4em;
  }
  @media(max-width: 768px) {
    grid-column: 1;
  }
  @media (max-width: 480px) {
    margin-left: 0
  }
`

const TestimonialGrid = styled.div`
  display: grid;
  margin-left: 5%; 
  margin-bottom: 5%;
  grid-template-columns: 35% 22% 22% 1fr;
  grid-template-rows: repeat(2, auto);
  & ${CardWrapper}: nth-child(2) {
    grid-column: 3;
    @media(max-width: 1024px) {
      grid-column: 2;
      margin-left: -1em;
    }
    @media(max-width: 768px) {
      display: none;
    }
  }
  @media(max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Background = styled.div`
  grid-column: 1 / 5;
  grid-row: 1;
  background-color: ${colors.lightPeach};
  @media(max-width: 1024px) {
    grid-column: 1 / 3;
  }
  @media(max-width: 768px) {
    grid-column: 1;
  }
`
const Heading = styled(Flex)`
  margin: 3em 0 2em 10.5%;
  text-align: left;
  width: 18%;
  @media(max-width: 1024px) {
    width: 30%;
  }
  @media(max-width: 768px) {
    width: 60%;
  }
  @media(max-width: 480px) {
    width: 70%;
  }
  `

const Testimonial = ({ copy }) => {
  let data = copy[1]
  let testimonial = Object.entries(copy[1].testimonial)

  let cards = testimonial.map(item => <TestimonialCard key={item.id} copy={item} />)

  return (
    <TestimonialGrid>
      <Background>
        <Heading contentCentre justifyEnd>
          <FadeIn>
            <H2Testimonial color={data.color}>{data.h2}</H2Testimonial>
            </FadeIn>
            <Body color={data.color}>{data.p1}</Body>
        </Heading>
      </Background>
      {cards}
    </TestimonialGrid>
  )
}

export default Testimonial
