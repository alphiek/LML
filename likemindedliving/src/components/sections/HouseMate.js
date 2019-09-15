import React from 'react'
import styled from 'styled-components'

import { HouseMateImage, HouseMateText } from '../Grids/SectionSubGrid'
import HousemateMatching from '../../Illustrations/HousemateMatching'
import { FadeIn } from '../animations/FadeIn'
import { TextSectionEnd } from '../text/TextSection'
import { FactRight } from '../text/Text'
import PageLink from '../../global/Links/PageLink'



const SignUpFormWrapper = styled.div`
  width: 12em;
  padding-top: 1em;
  @media (max-width: 1024px) {
     width: 15em;
  }
  @media (max-width: 480px) {
      width: 100%;
  }
`

const HouseMate = ({ copy }) => {
    let data = copy[1]

    return (
        <>
            <HouseMateImage justifyCenter>
                <HousemateMatching color={data.blob} rotate={data.rotate} />
            </HouseMateImage>
            <HouseMateText contentCenter alignEnd column>
                <TextSectionEnd copy={data}>
                    <FadeIn>
                    <FactRight color={data.factColor}>{data.fact}</FactRight>
                    </FadeIn>
                    <FadeIn>
                        <SignUpFormWrapper>
                            <PageLink color='white' link={data.link} />
                        </SignUpFormWrapper>
                    </FadeIn>
                </TextSectionEnd >
            </HouseMateText>
        </>
    )
}

export default HouseMate