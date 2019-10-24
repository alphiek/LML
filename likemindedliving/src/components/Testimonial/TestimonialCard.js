import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Body } from "../Text/Text"
import Icons from "../Icons/Icons"
import elevation from '../Utilities/elevation'

const Card = styled.div`
  width: 45%;
  background-color: rgba(75, 74, 104, 0.95);
  ${elevation[3]};
  color: white;
  padding: 50px;
  border-radius: 25px;
  border-bottom-right-radius: 0;
  margin-top: -70px;
  @media (max-width: 1180px) {
    &:last-child {
      display: none;
    }
    width: 70%;
  }
`

const TestimonialCard = ({ copy }) => {
  let data = copy[1]

  return (
    <Card>
      <div>
        <Body>{data.text}</Body>
        <Icons name="dividerShort" fill={data.divider} />
        <Body>{data.name}</Body>
      </div>
    </Card>
  )
}

export default TestimonialCard

TestimonialCard.propTypes = {
  copy: PropTypes.array.isRequired,
}
