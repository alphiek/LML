import React from 'react'
import { FullWidthText } from '../text/TextSection'
import { Body } from '../text/Text'
import { FullWidthContainer, CarouselContainer, LinkContainerRight } from '../containers/Containers'
import { CarouselLink } from '../../global/Links/CarouselLink'

const Blogs = ({ copy }) => {
    return (
        <FullWidthContainer column >
            <FullWidthText copy={copy[1]} />
            <CarouselContainer justifyCenter alignCenter>
                <Body>This will be the wp carousel</Body>
            </CarouselContainer>
            <LinkContainerRight>
                <CarouselLink link={copy[1].link} />
            </LinkContainerRight>
        </ FullWidthContainer>
    )
}

export default Blogs