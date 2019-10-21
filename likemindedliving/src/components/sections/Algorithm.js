import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AlgorithmIllustration from '../../Illustrations/AlgorithmIllustration'
import { MainSectionContainer, SectionWrapper, Wrapper, SignUpFormWrapper } from '../containers/Containers'
import { FadeIn } from '../animations/FadeIn'
import { TextSection } from '../text/TextSection'
import Flex from '../containers/Flex'
import { FactBody } from '../text/Text'
import PageLink from '../../global/Links/PageLink'

const AlgorithmContainer = styled(Flex)`
  margin-bottom: 1em;
  @media (max-width: 1180px) {
    justify-content: center;
    align-items: center;
 }
`
const Spacer = styled.div`
@media (max-width: 1180px) {
    height: 40px;
}
`

const Algorithm = ({ copy }) => {
    return (
        <MainSectionContainer>
            <SectionWrapper>
                <Wrapper>
                    <AlgorithmIllustration />
                    <Spacer />
                </Wrapper>
                <Wrapper>
                    <TextSection copy={copy}>
                        <AlgorithmContainer>
                            <FactBody color={copy.factColor}>{copy.fact.one}</FactBody>
                            <FactBody color={copy.factColor}>{copy.fact.two}</FactBody>
                        </AlgorithmContainer>
                        <FadeIn>
                            <SignUpFormWrapper>
                                <PageLink link={copy.link} />
                            </SignUpFormWrapper>
                        </FadeIn>
                    </TextSection >
                </Wrapper>
            </SectionWrapper>
        </MainSectionContainer>
    )
}

export default Algorithm

Algorithm.propTypes = {
    copy: PropTypes.shape({
        bgColor: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        divider: PropTypes.string.isRequired,
        fact: PropTypes.objectOf(PropTypes.string).isRequired,
        factColor: PropTypes.string.isRequired,
        h2: PropTypes.string.isRequired,
        link: PropTypes.objectOf(PropTypes.string).isRequired,
        p1: PropTypes.string.isRequired
    }).isRequired
}