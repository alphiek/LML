import React from 'react'
import styled from 'styled-components'

import { LandlordTextSection } from '../text/LandlordTextSection'

const CopyWrapper = styled.div`
    width: 100%;
    position: relative;
    margin: 2em 0;
    grid-area: copy;
    padding-right: 3em;
    @media (max-width: 1024px) {
    grid-area: right;
    padding-right: 0;
    margin: 1em 0 2em 0;
    }
`

export const SectionContent = ({ copy }) => {
    let data = copy[1]

    return (
        <>
            <CopyWrapper>
                <LandlordTextSection copy={data}/>
            </CopyWrapper>
        </>
    )
}