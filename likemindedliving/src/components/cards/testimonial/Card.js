import React from 'react'
import { Body } from '../../text/Text'
import styled from 'styled-components'
import { ShortSquiggle } from '../../shapes/Squiggle'

const TextWrapper = styled.div`
  padding: 1em 2em 2em 1em;
`

const Card = ({ color, copy, children }) => {
    console.log(copy)
    return (
        <div style={{width: '18%'}}>
            {children}
            <TextWrapper>
                <Body>{copy.text}</Body>
                 <ShortSquiggle color={color} width='2.5em' />
                <Body>{copy.name}</Body>
                <Body>{copy.job}</Body>
            </TextWrapper>            
        </div>
    )
}

export default Card