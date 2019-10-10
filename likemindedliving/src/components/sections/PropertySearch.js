import React from 'react'

import PropertySearchTool from '../../Illustrations/PropertySearchTool'
import { FadeIn } from '../animations/FadeIn'
import { TextSection } from '../text/TextSection'
import PageLink from '../../global/Links/PageLink'
import { SectionContainer, SectionWrapper, Wrapper, SignUpFormWrapper } from '../containers/Containers'


const PropertySearch = ({ copy }) => {
    return (
        <SectionContainer>
            <SectionWrapper>
            <Wrapper>
                <PropertySearchTool color={copy.blob} />
            </Wrapper>
            <Wrapper>
                <TextSection copy={copy}>
                    <FadeIn>
                        <SignUpFormWrapper>
                            <PageLink link={copy.link} />
                        </SignUpFormWrapper>
                    </FadeIn>
                </TextSection >
            </Wrapper>
            </SectionWrapper>            
        </SectionContainer>
    )
}

export default PropertySearch