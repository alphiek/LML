import React from 'react'
import { FlexChild } from '../containers/Containers'
import { H2, Body } from '../text/Text'
import Cta from '../text/Cta'
import { ShortSquiggle } from '../shapes/Squiggle'

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
                copy.squiggle && <ShortSquiggle color={copy.squiggle} width='3.5em'/>
            }
            <Body color={copy.color}>{copy.p1}</Body>
            {children}
            {   
                copy.cta && <Cta color={copy.color} cta={copy.cta} />
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