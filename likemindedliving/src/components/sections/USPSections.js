import React from 'react'
import styled from 'styled-components'
import { GridItem, ReverseItemLeft, ReverseItemRight } from '../Grids/SectionSubGrid'
import { TextSection } from '../text/TextSection'
import { BlobOne, GradBlob, BlobTwo } from '../shapes/Blobs'
import HousemateIcons from '../../images/HousemateIcons'
import { AlgorithmContainer, AlgorithmFactWrapper } from '../containers/Containers'
import { Body } from '../text/Text'


const Icon = styled.div`
  width: 1.2em;
  height: 1.2em;
  border 1px solid #F9D1B7;
  border-radius: 50%;
  margin-right: 0.4em;
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
            <AlgorithmFactWrapper alignCenter nowrap><Icon /><Body>{data.fact.three}</Body></AlgorithmFactWrapper>
        </AlgorithmContainer>
        blob = <GradBlob />
    } else {
        blob = <BlobOne color={data.blob} />
    }

    return (
        <>
            <ReverseItemRight>
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
        fact = <>
            <HousemateIcons />
            <Body color={copy[1].color}>{copy[1].fact}</Body>
        </>
        blob = <BlobOne color={data.blob} rotate={data.rotate} />
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