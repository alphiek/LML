import React from 'react'
import { CarouselTextSection } from '../text/TextSection'
import { CarouselContainer, ProcessLinkRight, CarouselHeadingContainer } from '../containers/Containers'
import ProcessSlide from '../Swiper/process/ProcessSlide'
import PageLink from '../../global/Links/PageLink'

const Process = ({ copy }) => {
    return (
        <div>
             <ProcessLinkRight>
                <PageLink link={copy[1].link} />
            </ProcessLinkRight>
            <CarouselContainer justifyCenter alignCenter>
                <ProcessSlide/> 
            </CarouselContainer>
            <CarouselHeadingContainer>
              <CarouselTextSection copy={copy[1]} />
            </CarouselHeadingContainer>
        </div>           
    )
}

export default Process