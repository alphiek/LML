import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import { H2, Body } from '../text/Text'
import { colors } from '../../global/colors'
import TestimonialCard from './TestimonialCard'

const H2Testimonial = styled(H2)`
  margin-bottom: 0.5em;
`

export const CardWrapper = styled(Flex)`
  grid-column: 2;
  grid-row: 1 / span 2;
  @media(max-width: 1024px) {
    grid-column: 1;
    grid-row: 2;
  }
`

const TestimonialGrid = styled.div`
  display: grid;
  margin-left: 5%; 
  grid-template-columns: 33.3% 25% 1fr;
  grid-template-rows: repeat(2, auto);
  & ${CardWrapper}: nth-child(2) {
    grid-column: 3;
    @media(max-width: 1024px) {
      grid-column: 2;
    }
  }
  @media(max-width: 1024px) {
    grid-template-columns: 50% 50%;
  }
`
const Background = styled.div`
  grid-column: 1 / 4;
  grid-row: 1;
  background-color: ${colors.lightPeach};
`
const Heading = styled(Flex)`
  margin: 2em 0 2em 10%;
  width: 15%;
  @media(max-width: 1024px) {
    width: 40%;
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

  let cards = testimonial.map(item => <TestimonialCard copy={item}/>)

  return (
    <TestimonialGrid>
      <Background>
      <Heading contentCentre justifyEnd>
        <H2Testimonial color={data.color}>{data.h2}</H2Testimonial>
        <Body color={data.color}>{data.p1}</Body>
      </Heading>
      </Background> 
      {cards}
    </TestimonialGrid>
  )
}

export default Testimonial
