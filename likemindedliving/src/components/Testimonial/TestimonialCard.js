import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'

const Card = styled.div`  
  width: 45%;
  background-color: rgba(75, 74, 104, 0.95);
  color: white;
  padding: 30px;
  border-radius: 25px;
  border-bottom-right-radius: 0;
  margin-top: -70px;
  margin-right: 16px;
  @media (max-width: 1180px) {
    &:last-child {
      display: none;
    }
    margin-right: 0px;
  }
  @media (max-width: 768px) {
   width: 70%;
  }
`

const TestimonialCard = ({ copy }) => {
  let data = copy[1]

  return (
    <Card>
      <div>
        <Body>{data.text}</Body>
        <ShortDivider color={data.divider} top='1em' width='2.5em' bottom='0.2rem' />
        <Body>
          {data.name}
        </Body>
      </div>
    </Card>
  )
}

export default TestimonialCard

TestimonialCard.propTypes = {
  copy: PropTypes.array.isRequired
}