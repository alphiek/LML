import React from 'react'
import { FullWidthText } from '../text/TextSection'
import { FullWidthContainer, CarouselContainer, LinkWrapperRight } from '../containers/Containers'
import { CarouselLink } from '../../global/Links/CarouselLink'
import SwiperCarousel from '../Swiper/Swiper'
import { propertyData } from '../cards/Properties/propertyData'
import { blogData } from '../cards/Blogs/blogData'

const WPCarousel = ({ copy }) => {
    return (
        <FullWidthContainer column >
            <FullWidthText copy={copy[1]} />
            <CarouselContainer justifyCenter alignCenter>
                {
                    copy[0] === 'properties' ? <SwiperCarousel data={propertyData}/> : <SwiperCarousel data={blogData}/>
                }
            </CarouselContainer>
            <LinkWrapperRight>
                <CarouselLink link={copy[1].link} />
            </LinkWrapperRight>
        </ FullWidthContainer>
    )
}

export default WPCarousel