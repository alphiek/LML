import React from 'react'
import styled from 'styled-components'
import { GridItem, ReverseItemLeft, ReverseItemRight } from '../Grids/SectionSubGrid'
import { TextSection } from '../text/TextSection'
import { BlobOne, GradBlob, BlobTwo, BlobThree } from '../shapes/Blobs'
import { AlgorithmContainer, AlgorithmFactWrapper } from '../containers/Containers'
import { Body } from '../text/Text'


const Icon = styled.div`
  width: 1.2em;
  height: 1.2em;
  border 1px solid #F9D1B7;
  border-radius: 50%;
  margin-right: 0.4em;
`

const H4 = styled.h4`
  margin-bottom: 1em;
  margin-top: 0.5em;
  color: rgba(45,123,239,0.9);
`

export const SectionContent = ({ copy }) => {
    let data = copy[1]
    let section = copy[0]

    let fact;
    let blob;

    if (section === 'sectionThree') {
        fact = <AlgorithmContainer>
                  <AlgorithmFactWrapper alignCenter nowrap><Icon /><Body>{data.fact.one}</Body></AlgorithmFactWrapper>
                  <AlgorithmFactWrapper alignCenter nowrap><Icon /><Body>{data.fact.two}</Body></AlgorithmFactWrapper>
               </AlgorithmContainer>
        blob = <GradBlob />
    } else if (section === 'sectionThreeLandlord') {
        fact = Object.entries(data.fact).map((item, index) => <><H4 key={index}>{item[1].h4}</H4> <Body>{item[1].p}</Body></>)
        blob = <GradBlob />
    } else {
        blob = <BlobOne color={data.blob} />
    }

    return (
        <>
            <ReverseItemRight justifyCenter>
                {blob}
            </ReverseItemRight>
            <ReverseItemLeft>
                <TextSection copy={data}>
                    {fact}
                </TextSection>
            </ReverseItemLeft>
        </>
    )
}



export const SectionContentReverse = ({ copy }) => {
    let data = copy[1]
    let section = copy[0]

    let fact;
    let blob;

    if (section === 'sectionTwo') {
        fact = <Body color={copy[1].color}>{copy[1].fact}</Body>
        blob = <BlobThree color={data.blob} rotate={data.rotate} />
    } else {
        blob = <BlobTwo color={copy[1].blob} />
    }

    return (
        <>
            <GridItem area='left'>
                {blob}
            </GridItem>
            <GridItem area='right'>
                <TextSection copy={data}>
                    {fact}
                </TextSection>
            </GridItem>
        </>
    )
}