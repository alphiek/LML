import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TestimonialOne } from '../../images/queries/TestimonialOne'
import { TestimonialTwo } from '../../images/queries/TestimonialTwo'
import { Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import Img from 'gatsby-image'
import { FadeIn } from '../animations/FadeIn'

export const TestimonialImageWrapper = styled(Img)`
  width: 50%;
  `

const TextWrapper = styled.div`
`

const Card = styled.div`  
  width: 40%;
  margin-top: -3.5em;
`

const TestimonialCard = ({ copy }) => {
  let data = copy[1]
  let number = copy[0]

  let img;

  if (number === 'one') {
    img = <TestimonialOne />
  } else if (number === 'two') {
    img = <TestimonialTwo />
  } else {
    img = <p>There is a problem here</p>
  }

  return (
    <Card>
      <FadeIn>
        {img}
      </FadeIn>
      <TextWrapper>
        <Body>{data.text}</Body>
        <ShortDivider color={data.divider} top='1em' width='2.5em' bottom='0.2rem' />
        <Body weight={600}>
          {data.name}
        </Body>
      </TextWrapper>
    </Card>
  )
}

export default TestimonialCard

TestimonialCard.propTypes = {
  copy: {
    0: PropTypes.string.isRequired,
    1: PropTypes.objectOf(PropTypes.string).isRequired,
  }
}