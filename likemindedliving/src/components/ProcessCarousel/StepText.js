import React from 'react'
import styled from 'styled-components'
import { Body } from '../text/Text'

const TextWrapper = styled.div`
  height: 3.5em;
  margin: 0 1em;
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