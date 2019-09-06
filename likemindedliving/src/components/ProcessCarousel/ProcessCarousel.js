import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import PageLink from '../../global/Links/PageLink'
import { Body } from '../text/Text'
import { colors } from '../../global/colors'


export const CarouselContainer = styled(Flex)`
  width: 100%;
  height: 15em;
`

export const CarouselHeadingContainer = styled.div`
  background-color: ${colors.lightPeach};
  padding: 2em 0 2em 15%;
  width: 90%;
`

export const ProcessLinkRight = styled.div`
  margin-bottom: 2em;
`


const ProcessCarousel = ({ copy }) => {
    console.log(copy)
    return (
        <div>
            <ProcessLinkRight>
                <PageLink link={copy.link} />
            </ProcessLinkRight>
            <CarouselContainer justifyCenter alignCenter>
            </CarouselContainer>
            <CarouselHeadingContainer>
                <div>
                    <h3>{copy.h3}</h3>
                    <Body color={copy.color}>{copy.p1}</Body>
                </div>
            </CarouselHeadingContainer>
        </div>
    )
}

export default ProcessCarousel