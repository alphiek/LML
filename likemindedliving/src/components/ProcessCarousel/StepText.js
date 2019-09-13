import React from 'react'
import styled from 'styled-components'
import { Body } from '../text/Text'

const TextWrapper = styled.div`
  margin-top: 1em;
  height: 3.5em;
  width: 90%;
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