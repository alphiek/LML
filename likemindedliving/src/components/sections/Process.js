import React from 'react'
import { CarouselTextSection } from '../text/TextSection'
import { ContentCenter, CarouselContainer, ProcessLinkRight, CarouselHeadingContainer } from '../containers/Containers'
import ProcessSlide from '../Swiper/process/ProcessSlide'
import PageLink from '../../global/Links/PageLink'

const Process = ({ copy }) => {
    return (
        <ContentCenter columnReverse>
            <ProcessLinkRight>
                <PageLink link={copy[1].link} />
            </ProcessLinkRight>
            <CarouselContainer justifyCenter alignCenter>
                <ProcessSlide/> 
            </CarouselContainer>
            <CarouselHeadingContainer>
              <CarouselTextSection copy={copy[1]} />
            </CarouselHeadingContainer>
        </ContentCenter>
    )
}

export default Process