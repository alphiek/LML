import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Body } from '../Text/Text'

const StepText = ({ content, name }) => {
  let section

  if (name === 'tenant') {
    section = (
      <TextWrapper>
        <Body>{content}</Body>
      </TextWrapper>
    )
  } else {
    section = (
      <LandlordTextWrapper>
        <Body>{content}</Body>
      </LandlordTextWrapper>
    )
  }
  return <>{section}</>
}

export default StepText

StepText.propTypes = {
  content: PropTypes.string.isRequired,
}

const TextWrapper = styled.div`
  margin: 1rem 0;
  height: auto;
  min-height: 5rem;
  width: 65%;
  text-align: center;
  @media (max-width: 768px) {
    margin: 1rem 0 16px 0;
  }
  @media (max-width: 480px) {
    height: auto;
    width: 90%;
  }
`

const LandlordTextWrapper = styled(TextWrapper)`
  min-height: 8.6rem;
`
