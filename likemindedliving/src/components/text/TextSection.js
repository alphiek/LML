import React from 'react'
import { FlexChild } from '../containers/Containers'
import { H2, Body } from '../text/Text'
import Squiggle from '../shapes/Squiggle'

export const TextSection = ({ copy, children }) => {
    return (
        <FlexChild>
            {
                copy.h2 && <H2 color={copy.color}>{copy.h2}</H2>
            } 
            {
                copy.h3 && <h3>{copy.h3}</h3>
            }           
            {
                copy.squiggle && <Squiggle color={copy.squiggle} />
            }
            <Body color={copy.color}>{copy.p1}</Body>
            {children}
            {   
                copy.cta && <Body color={copy.color}>{copy.cta}</Body>
            }
        </FlexChild>
    )
}

export const FullWidthText = ({ copy }) => {
    return (
        <>
          <H2 color={copy.color}>{copy.h2}</H2>
          {
              copy.p1 && <Body color={copy.color}>{copy.p1}</Body>
          }
        </>
    )
}