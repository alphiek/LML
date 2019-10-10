import React from 'react'
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

const AlgorithmFactWrapper = styled(Flex)`
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  width: 100%;
  @media (max-width: 1180px) {
     flex-wrap: wrap;
     justify-content: center;
     flex-direction: column;
  }
`

const Icon = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: rgba(75, 74, 104, 0.95);
  border-radius: 50%;
  margin-right: 0.7em;
  @media (max-width: 1180px) {
      width: 1.5em;
      height: 1.5em;
      margin: 0.5em 0 0.5em 0;
  }
  @media (max-width: 768px) {
    width: 1.7em;
    height: 1.7em;
    margin: 0.5em 0 0.5em 0;
}
@media (max-width: 480px) {
    width: 1.8em;
    height: 1.8em;
    margin: 0.5em 0 0.5em 0;
}`

const Algorithm = ({ copy }) => {
    return (
        <MainSectionContainer>
            <SectionWrapper>
                <Wrapper>
                <AlgorithmIllustration />
                </Wrapper>
                <Wrapper>
                <TextSection copy={copy}>
                    <AlgorithmContainer>
                        <AlgorithmFactWrapper alignCenter noWrap contentCenter><Icon /><FactBody color={copy.factColor}>{copy.fact.one}</FactBody></AlgorithmFactWrapper>
                        <AlgorithmFactWrapper alignCenter noWrap contentCenter><Icon /><FactBody color={copy.factColor}>{copy.fact.two}</FactBody></AlgorithmFactWrapper>
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