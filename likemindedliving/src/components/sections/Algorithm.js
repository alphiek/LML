import React from 'react'
import styled from 'styled-components'

import { AlgorithmImage, AlgorithmText } from '../Grids/SectionSubGrid'
import AlgorithmIllustration from '../../Illustrations/AlgorithmIllustration'
import { FadeIn } from '../animations/FadeIn'
import { TextSection } from '../text/TextSection'
import Flex from '../containers/Flex'
import { Body } from '../text/Text'
import PageLink from '../../global/Links/PageLink'


const AlgorithmContainer = styled(Flex)`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`

const AlgorithmFactWrapper = styled(Flex)`
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  width: 100%;
`

const SignUpFormWrapper = styled.div`
  width: 10em;
  @media (max-width: 1024px) {
     width: 15em;
     padding-top: 2em;
  }
  @media (max-width: 480px) {
      width: 12em;
  }
`

const Icon = styled.div`
  width: 1.2em;
  height: 1.2em;
  border 1px solid #F9D1B7;
  border-radius: 50%;
  margin-right: 0.4em;
`


const Algorithm = ({ copy }) => {
    let data = copy[1]

    return (
        <>
            <AlgorithmImage justifyCenter>
                <AlgorithmIllustration />
            </AlgorithmImage>
            <AlgorithmText contentCenter column>
                <TextSection copy={data}>
                    <AlgorithmContainer>
                        <AlgorithmFactWrapper alignCenter nowrap><Icon /><Body>{data.fact.one}</Body></AlgorithmFactWrapper>
                        <AlgorithmFactWrapper alignCenter nowrap><Icon /><Body>{data.fact.two}</Body></AlgorithmFactWrapper>
                    </AlgorithmContainer>
                    <FadeIn>
                        <SignUpFormWrapper>
                            <PageLink color='white' link={data.link} />
                        </SignUpFormWrapper>
                    </FadeIn>
                </TextSection >
            </AlgorithmText>
        </>
    )
}

export default Algorithm