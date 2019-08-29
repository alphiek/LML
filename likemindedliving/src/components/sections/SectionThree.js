import React from 'react'
import { TextSection } from '../text/TextSection' 
import { Body } from '../text/Text'
import { ContentCenter, AlgorithmContainer, AlgorithmFactWrapper } from '../containers/Containers'
import { GradBlob } from '../shapes/Blobs'
import styled from 'styled-components'

const Icon = styled.div`
  width: 1.2em;
  height: 1.2em;
  border 1px solid #F9D1B7;
  border-radius: 50%;
  margin-right: 0.4em;
`

const SectionThree = ({ copy }) => {
    return (
        <ContentCenter alignCenter >
            <TextSection copy={copy[1]}>
                <AlgorithmContainer>
                    <AlgorithmFactWrapper alignCenter nowrap><Icon /><Body>{copy[1].fact.one}</Body></AlgorithmFactWrapper>
                    <AlgorithmFactWrapper alignCenter nowrap><Icon /><Body>{copy[1].fact.two}</Body></AlgorithmFactWrapper>
                    <AlgorithmFactWrapper alignCenter nowrap><Icon /><Body>{copy[1].fact.three}</Body></AlgorithmFactWrapper>
                </AlgorithmContainer>                
            </TextSection>
            <GradBlob />
        </ContentCenter>
    )
}

export default SectionThree