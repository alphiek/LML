import React from 'react'
import { FullWidthText } from '../text/TextSection'
import { Body } from '../text/Text'
import { FullWidthContainer, CarouselContainer } from '../containers/Containers'

const Testimonial = ({ copy }) => {
    return (
        <FullWidthContainer column>
            <FullWidthText copy={copy[1]} />
            <CarouselContainer justifyCenter alignCenter>
                <Body>This will be the testimonial carousel</Body>
            </CarouselContainer>
        </ FullWidthContainer>
    )
}

export default Testimonial
