import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Body } from '../text/Text'

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
      width: 100%;
  }
`

const StepText = ({ content }) => {
    return (
        <TextWrapper>
            <Body>
                {content}
            </Body>
        </TextWrapper>
    )
}

export default StepText

StepText.propTypes = {
    content: PropTypes.string.isRequired
}