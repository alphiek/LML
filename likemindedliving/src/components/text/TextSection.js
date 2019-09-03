import React from 'react'
import { FlexChild } from '../containers/Containers'
import { H2, Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import PageLink from '../../global/Links/PageLink'

export const TextSection = ({ copy, children }) => {
    return (
        <FlexChild justifyCenter>
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
        </FlexChild>
    )
}

export const CarouselTextSection = ({ copy }) => {
    return (
        <FlexChild justifyCenter>
           <h3>{copy.h3}</h3>
            <Body color={copy.color}>{copy.p1}</Body>
            {
                copy.p2 && <Body>{copy.p2}</Body>
            }
        </FlexChild>
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