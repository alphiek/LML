import React from 'react'
import Headline from '../Headline/Headline'
import { SectionContent } from '../sections/LandlordFAQs'
import ProcessContainer from '../ProcessCarousel/ProcessContainer'
import PressReel from '../PressReel/PressReel'
import Testimonial from '../Testimonial/Testimonial'
import WPCarousel from '../WPCarousel/WPCarousel'


const Landlords = ({ copy }) => {
    return (
        <>
         <Headline copy={copy.headline} />
         <SectionContent copy={copy.sectionOne} />
         <ProcessContainer copy={copy.process} />
         <SectionContent copy={copy.sectionTwo} />
         <SectionContent copy={copy.sectionThree} />
         <PressReel copy={copy.pressReel} />
         <SectionContent copy={copy.sectionFour} />
         <Testimonial copy={copy.testimonials} />
         <WPCarousel copy={copy.blogs} />
        </>
    )
}

export default Landlords