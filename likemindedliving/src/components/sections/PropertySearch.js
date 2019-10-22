import React from 'react'
import PropTypes from 'prop-types'

import PropertySearchTool from '../Illustrations/PropertySearchTool'
import { FadeIn } from '../animations/FadeIn'
import { TextSection } from '../text/TextSection'
import PageLink from '../Links/PageLink'
import {
    SectionContainer,
    SectionWrapper,
    Wrapper,
    SignUpFormWrapper
} from '../containers/Containers'


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

PropertySearch.propTypes = {
    copy: PropTypes.shape({
        bgColor: PropTypes.string.isRequired,
        blob: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        divider: PropTypes.string.isRequired,
        h2: PropTypes.string.isRequired,
        link: PropTypes.objectOf(PropTypes.string).isRequired,
        p1: PropTypes.string.isRequired
    }).isRequired
}