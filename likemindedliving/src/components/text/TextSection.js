import React from 'react'
import Flex from '../containers/Flex'
import { H2, Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import PageLink from '../../global/Links/PageLink'
import { FadeIn } from '../animations/FadeIn'
import styled from 'styled-components'

const TextContainer = styled(Flex)`
   height: 100%;
`

const FullWidthTextWrapper = styled.div`
   margin: 5% 15% 4% 15%;
   @media (max-width: 1024px) {
    width: 40%;
    margin: 5% 0 4% 20%; 
}
   @media (max-width: 768px) {
    width: 60%;
    margin: 5% 10% 4% 12%; 
}
`

const Span = styled.span`
    display: block;
    margin-top: 0.4em;
    font-family: Poppins, Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 0.9em;
`

export const TextSection = ({ copy, children }) => {
    return (
        <TextContainer column justifyCenter contentCenter>
            {
                copy.h2 &&
                <FadeIn>
                    <H2 color={copy.color}>{copy.h2}</H2>
                </FadeIn>
            }
            {
                copy.h3 && <FadeIn><h3>{copy.h3}</h3></FadeIn>
            }
            {
                copy.divider && <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
            }
            <Body color={copy.color}>{copy.p1}</Body>
            {
                copy.p2 && <Body>{copy.p2}</Body>
            }
            {children}
            {
                copy.link && <FadeIn><PageLink color='white' link={copy.link} /></FadeIn>
            }
        </TextContainer>
    )
}

export const FullWidthText = ({ copy }) => {

    let h2;

    if (copy.h2p2) {
        h2 = <H2 color={copy.color}>{copy.h2}<br /><Span>{copy.h2p2}</Span></H2>
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