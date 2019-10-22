import React from 'react'
import PropTypes from 'prop-types'

import HousemateMatching from '../Illustrations/HousemateMatching'
import { MainSectionContainer, ReverseSectionWrapper, Wrapper, SignUpFormWrapper } from '../containers/Containers'
import { FadeIn } from '../animations/FadeIn'
import { TextSection } from '../text/TextSection'
import { FactBody } from '../text/Text'
import PageLink from '../Links/PageLink'
import housemateBG from '../../images/housemateBG.svg'
import { BGPattern } from '../ProcessCarousel/ProcessContainer'


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
            <BGPattern src={housemateBG} />
        </MainSectionContainer>
    )
}

export default HouseMate

HouseMate.propTypes = {
    copy: PropTypes.shape({
        bgColor: PropTypes.string.isRequired,
        blob: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        divider: PropTypes.string.isRequired,
        factColor: PropTypes.string.isRequired,
        fact: PropTypes.string.isRequired,
        h2: PropTypes.string.isRequired,
        link: PropTypes.objectOf(PropTypes.string).isRequired,
        p1: PropTypes.string.isRequired,
        rotate: PropTypes.string.isRequired
    }).isRequired
}