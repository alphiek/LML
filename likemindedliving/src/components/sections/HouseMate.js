import React from 'react'

import HousemateMatching from '../../Illustrations/HousemateMatching'
import { MainSectionContainer, ReverseSectionWrapper, Wrapper, SignUpFormWrapper } from '../containers/Containers'
import { FadeIn } from '../animations/FadeIn'
import { TextSection } from '../text/TextSection'
import { FactBody } from '../text/Text'
import PageLink from '../../global/Links/PageLink'


const HouseMate = ({ copy }) => {

    return (
        <MainSectionContainer bgColor={copy.bgColor}>
            <ReverseSectionWrapper>
                <Wrapper>
                    <HousemateMatching color={copy.blob} rotate={copy.rotate} />
                </Wrapper>
                <Wrapper>
                    <TextSection copy={copy}>
                        <FadeIn>
                            <FactBody color={copy.factColor}>{copy.fact}</FactBody>
                        </FadeIn>
                        <FadeIn>
                            <SignUpFormWrapper>
                                <PageLink link={copy.link} />
                            </SignUpFormWrapper>
                        </FadeIn>
                    </TextSection>
                </Wrapper>
            </ReverseSectionWrapper>
        </MainSectionContainer>
    )
}

export default HouseMate