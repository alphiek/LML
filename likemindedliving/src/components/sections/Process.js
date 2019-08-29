import React from 'react'
import { TextSection } from '../text/TextSection'
import { Body }  from '../text/Text'
import { ContentCenter, CarouselContainer } from '../containers/Containers'

const Process = ({ copy }) => {
    return (
        <ContentCenter columnReverse>
        <CarouselContainer justifyCenter alignCenter>
            <Body>This will be the process carousel</Body>
        </CarouselContainer>
        <TextSection copy={copy[1]}/>
        </ContentCenter>
    )
}

export default Process