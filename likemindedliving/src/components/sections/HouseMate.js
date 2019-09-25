import React from 'react'
import styled from 'styled-components'

import HousemateMatching from '../../Illustrations/HousemateMatching'
import { FadeIn } from '../animations/FadeIn'
import { TextSectionEnd } from '../text/TextSection'
import { FactRight } from '../text/Text'
import PageLink from '../../global/Links/PageLink'

const HousemateSection = styled.section`
 width: 100%;
 display: flex;
 background-color: ${props => props.bgColor};
 flex-direction: row;
 flex-wrap: nowrap;
 justify-content: center;
 align-items: center;
 padding: 1.5rem 0;
 @media (max-width: 1024px) {
     flex-direction: column;
 }
`

const HouseMateImage = styled.div`
  width: 33.3%;
  @media (max-width: 1024px) {
    width: 60%;
}
`

const HouseMateText = styled.div`
  width: 33.3%;
  @media (max-width: 1024px) {
    width: 60%;
}
`

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

    return (
        <HousemateSection bgColor={copy.bgColor}>
            <HouseMateImage justifyCenter>
                <HousemateMatching color={copy.blob} rotate={copy.rotate} />
            </HouseMateImage>
            <HouseMateText contentCenter alignEnd column>
                <TextSectionEnd copy={copy}>
                    <FadeIn>
                    <FactRight color={copy.factColor}>{copy.fact}</FactRight>
                    </FadeIn>
                    <FadeIn>
                        <SignUpFormWrapper>
                            <PageLink link={copy.link} />
                        </SignUpFormWrapper>
                    </FadeIn>
                </TextSectionEnd >
            </HouseMateText>
        </HousemateSection>
    )
}

export default HouseMate