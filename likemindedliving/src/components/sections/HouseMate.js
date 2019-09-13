import React from 'react'
import styled from 'styled-components'

import { HouseMateImage, HouseMateText } from '../Grids/SectionSubGrid'
import HousemateMatching from '../../Illustrations/HousemateMatching'
import { FadeIn } from '../animations/FadeIn'
import { TextSection } from '../text/TextSection'
import { Body } from '../text/Text'
import PageLink from '../../global/Links/PageLink'


const SignUpFormWrapper = styled.div`
  width: 10em;
  padding-top: 1em;
  @media (max-width: 1024px) {
     width: 15em;
  }
  @media (max-width: 480px) {
      width: 12em;
  }
`

const HouseMate = ({ copy }) => {
    let data = copy[1]

    return (
        <>
            <HouseMateImage justifyCenter>
                <HousemateMatching color={data.blob} rotate={data.rotate} />
            </HouseMateImage>
            <HouseMateText contentCenter column>
                <TextSection copy={data}>
                    <Body color={data.color}>{data.fact}</Body>
                    <FadeIn>
                        <SignUpFormWrapper>
                            <PageLink color='white' link={data.link} />
                        </SignUpFormWrapper>
                    </FadeIn>
                </TextSection >
            </HouseMateText>
        </>
    )
}

export default HouseMate