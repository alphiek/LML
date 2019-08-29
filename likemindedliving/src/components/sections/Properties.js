import React from 'react'
import { FullWidthText } from '../text/TextSection'
import { Body } from '../text/Text'
import { FullWidthContainer, CarouselContainer } from '../containers/Containers'
import PageLink from '../../global/Links/PageLink'

const Properties = ({ copy }) => {
    return (
        <FullWidthContainer column>
            <FullWidthText copy={copy[1]} />
            <CarouselContainer justifyCenter alignCenter>
                <Body>This will be the properties carousel</Body>
            </CarouselContainer>
            <PageLink link={copy[1].link} />
        </ FullWidthContainer>
    )
}

export default Properties