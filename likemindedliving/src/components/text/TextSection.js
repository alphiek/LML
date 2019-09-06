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
   margin: 5% 0 4% 15%;
   @media (max-width: 480px) {
    margin: 5% 0 4% 10%; 
    width: 50%;
   }
   
`

export const TextSection = ({ copy, children }) => {
    return (
        <TextContainer column justifyCenter contentCenter>
            {
                copy.h2 && <H2 color={copy.color}>{copy.h2}</H2>
            }
            {
                copy.h3 && <h3>{copy.h3}</h3>
            }
            {
                copy.divider && <ShortDivider color={copy.divider} width='3.5em' />
            }
            <Body color={copy.color}>{copy.p1}</Body>
            {
                copy.p2 && <Body>{copy.p2}</Body>
            }
            {children}
            {
                copy.link && <PageLink link={copy.link} />
            }
        </TextContainer>
    )
}

export const FullWidthText = ({ copy }) => {
    return (
        <>
        <FadeIn delay={150}>
        <FullWidthTextWrapper>
                <H2 color={copy.color}>{copy.h2}</H2>
            </FullWidthTextWrapper>
        </FadeIn>
            {
                copy.p1 && <Body color={copy.color}>{copy.p1}</Body>
            }
        </>
    )
}