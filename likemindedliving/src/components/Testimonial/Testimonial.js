import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import { Body } from '../text/Text'
import { colors } from '../../global/colors'
import TestimonialCard from './TestimonialCard'
import { FadeIn } from '../animations/FadeIn'
import { ShortDivider } from '../Dividers/Dividers'

const H2Testimonial = styled.h2`
  margin-bottom: 0.5em;
  @meda (max-width: 1180px) 
  {
    width: 100%;
  }
`

export const CardWrapper = styled(Flex)`
  grid-column: 2;
  grid-row: 2 / span 2;
  @media(max-width: 1180px) {
    grid-column: 1;
    grid-row: 2;
    justify-content: center;
  }
`

const TestimonialGrid = styled.div`
  display: grid;
  margin-left: 5%; 
  margin-bottom: 5%;
  grid-template-columns: 38% 25% 25% 1fr;
  grid-template-rows: repeat(2, auto);
  & ${CardWrapper}: nth-child(2) {
    grid-column: 3;
    @media(max-width: 1180px) {
      display: none;
    }
  }
  @media(max-width: 1180px) {
    grid-template-columns: 100%;
    margin: 0;
  }
`
const Background = styled.div`
  grid-column: 1 / 5;
  grid-row: 1;
  background-color: ${colors.lightPeach};
  @media(max-width: 1180px) {
    grid-column: 1;
  }
`
const Heading = styled(Flex)`
  margin: 3em 0 2em 16%;
  text-align: left;
  width: 18%;
  @media(max-width: 1180px) {
    width: 80%;
    margin 3em auto 2em auto;
    justify-content: center;
    flex-direction: column;
  }
  @media(max-width: 768px) {
    width: 60%;
  }
  @media(max-width: 480px) {
    width: 70%;
  }
  `

const DividerWrapper = styled.div`
  @media (max-width: 1180px)
  {
    display: flex;
    justify-content: center;
    margin-bottom: 0.3em;
  }
  `

const Testimonial = ({ copy }) => {
  let data = copy
  let testimonial = Object.entries(copy.testimonial)

  let cards = testimonial.map((item, index) => <TestimonialCard key={index} copy={item} />)

  return (
    <TestimonialGrid>
      <Background>
        <Heading contentCentre justifyStart>
          <FadeIn>
            <H2Testimonial color={data.color}>{data.h2}</H2Testimonial>
            <DividerWrapper>
              <ShortDivider bottom='0' top='0' color={data.divider} width='3.5em' />
            </DividerWrapper>
          </FadeIn>
          <Body color={data.color}>{data.p1}</Body>
        </Heading>
      </Background>
      {cards}
    </TestimonialGrid>
  )
}

export default Testimonial
