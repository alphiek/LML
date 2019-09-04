import React from 'react'
import Flex from '../containers/Flex'
import { H2, Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import PageLink from '../../global/Links/PageLink'
import styled from 'styled-components'

const TextContainer = styled(Flex)`
   height: 100%;
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

export const CarouselTextSection = ({ copy }) => {
    return (
        <Flex>
           <h3>{copy.h3}</h3>
            <Body color={copy.color}>{copy.p1}</Body>
            {
                copy.p2 && <Body>{copy.p2}</Body>
            }
        </Flex>
    )
}

export const FullWidthText = ({ copy }) => {
    return (
        <>
            <div style={{ marginBottom: '0.5em'}}>
                <H2 color={copy.color}>{copy.h2}</H2>
            </div>
            {
                copy.p1 && <Body color={copy.color}>{copy.p1}</Body>
            }
        </>
    )
}