import React from 'react'
import styled from 'styled-components'
import { TestimonialOne } from '../../images/queries/TestimonialOne'
import { TestimonialTwo } from '../../images/queries/TestimonialTwo'
import { Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import { CardWrapper } from './Testimonial'
import Img from 'gatsby-image'

export const TestimonialImageWrapper = styled(Img)`
  width: 95%;
`

const Card = styled.div`  
  width: 10em;
  margin-top: 5em;
  margin-left: 2em;
  @media(max-width: 1024px) {
      margin-top: -1em;
      margin-left: 5em;
  }
  @media(max-width: 768px) {
    margin-top: -1em;
    margin-left: 15%;
}
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
        <CardWrapper>
            <Card>
                {img}
                <Body>{data.text}</Body>
                <ShortDivider color={data.divider} width='2.5em' />
                <Body>{data.name}</Body>
                <Body>{data.job}</Body>
            </Card>
        </CardWrapper>
    )
}

export default TestimonialCard