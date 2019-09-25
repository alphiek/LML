import React from 'react'
import styled from 'styled-components'

import AlgorithmIllustration from '../../Illustrations/AlgorithmIllustration'
import { FadeIn } from '../animations/FadeIn'
import { TextSection } from '../text/TextSection'
import Flex from '../containers/Flex'
import { FactBody } from '../text/Text'
import PageLink from '../../global/Links/PageLink'

const AlgorithmSection = styled.section`
 width: 100%;
 display: flex;
 background-color: ${props => props.bgColor};
 flex-direction: row-reverse;
 flex-wrap: nowrap;
 justify-content: center;
 align-items: center;
 padding: 1.5rem 0;
 @media (max-width: 1024px) {
     flex-direction: column;
 }
`

const AlgorithmImage = styled.div`
  width: 33.3%;
  @media (max-width: 1024px) {
    width: 60%;
}
`

const AlgorithmText = styled.div`
  width: 33.3%;
  @media (max-width: 1024px) {
    width: 60%;
}
`
const AlgorithmContainer = styled(Flex)`
  margin-bottom: 1em;
  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
 }
`

const AlgorithmFactWrapper = styled(Flex)`
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  width: 100%;
  @media (max-width: 1024px) {
     flex-wrap: wrap;
     justify-content: center;
     flex-direction: column;
  }
`

const SignUpFormWrapper = styled.div`
  width: 10em;
  @media (max-width: 1024px) {
     width: 15em;
     padding-top: 1em;
  }
  @media (max-width: 768px) {
    width: 15em;
    padding-top: 0em;
 }
  @media (max-width: 480px) {
      width: 12em;
  }
`

const Icon = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: rgba(75, 74, 104, 0.95);
  border-radius: 50%;
  margin-right: 0.7em;
  @media (max-width: 1024px) {
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
        <AlgorithmSection>
            <AlgorithmImage justifyCenter>
                <AlgorithmIllustration />
            </AlgorithmImage>
            <AlgorithmText contentCenter column>
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
            </AlgorithmText>
        </AlgorithmSection>
    )
}

export default Algorithm