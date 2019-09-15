import React from 'react'
import styled from 'styled-components'
import { Body } from '../text/Text'

const TextWrapper = styled.div`
  margin: 1em 0 0.5em 0;
  height: 3.5em;
  width: 65%;
  text-align: center;
  @media (max-width: 768px) {
    margin: 1em 0 1.5em 0;
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