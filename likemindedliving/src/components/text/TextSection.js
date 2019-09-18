import React from 'react'
import Flex from '../containers/Flex'
import { H2, H3, Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import { FadeIn } from '../animations/FadeIn'
import styled from 'styled-components'

const TextContainer = styled(Flex)`
   height: 100%;
   @media (max-width: 1024px) {
       width: 80%;
       align-items: center;
       margin-bottom: 1em;
   }
`

const TextContainerEnd = styled(Flex)`
   height: 100%;
   text-align: right;
   @media (max-width: 1024px) {
       width: 80%;
       align-items: center;
       margin-bottom: 1em;
   }
`

const FullWidthTextWrapper = styled.div`
   margin: 5% 15% 4% 20%;
   @media (max-width: 1024px) {
    width: 100%;
    margin: 5% 0 4% 0%; 
}
@media (max-width: 480px) {
    width: 60%;
    margin: 5% auto 4% auto;
}
`

const Span = styled.span`
    display: block;
    margin-top: 0em;
    width: 20em;
    font-family: Poppins, Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 0.9em;
    @media (max-width: 1024px)
    {
        margin: 0 auto;

    }
`

export const TextSection = ({ copy, children }) => {
    let h2;
    let h3;

    if (copy.h2) {
        h2 = <H2 color={copy.color}>{copy.h2}</H2>
    } else if (copy.h3) {
        h3 = <H3>{copy.h3}</H3>
    } 

    return (
        <TextContainer column justifyCenter contentCenter>
            {h2}
            {h3}
            {
                copy.divider && <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
            }
            <Body color={copy.color}>{copy.p1}</Body>
            {
                copy.p2 && <Body color={copy.color}>{copy.p2}</Body>
            }
            {children}
        </TextContainer>
    )
}


export const TextSectionEnd = ({ copy, children }) => {

    let h2;
    let h3;
    let p2;

    if (copy.h2) {
        h2 = <H2 color={copy.color}>{copy.h2}</H2>
    } else if (copy.h3) {
        h3 = <H3>{copy.h3}</H3>
    } else if (copy.p2) {
        p2 = <Body>{copy.p2}</Body>
    }

    return (
        <TextContainerEnd column alignEnd contentCenter>
            {h2}
            {h3}
            {
                copy.divider && <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
            }
            <Body color={copy.color}>{copy.p1}</Body>
            {p2}
            {children}
        </TextContainerEnd>
    )
}

export const FullWidthText = ({ copy, children }) => {

    let h2;

    if (copy.h2p2) {
        h2 = <H2 color={copy.color}>{copy.h2}<br />{children}<Span>{copy.h2p2}</Span></H2>
    } else {
        h2 = <H2 color={copy.color}>{copy.h2}</H2>
    }
    return (
        <FadeIn delay={150}>
            <FullWidthTextWrapper>
                {h2}
            </FullWidthTextWrapper>
        </FadeIn>
    )
}