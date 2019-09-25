import React from 'react'
import Headline from '../Headline/Headline'
import PropertySearch from '../sections/PropertySearch'
import ProcessContainer from '../ProcessCarousel/ProcessContainer'
import HouseMate from '../sections/HouseMate'
import Algorithm from '../sections/Algorithm'
import PressReel from '../PressReel/PressReel'
import IdealChoice from '../sections/IdealChoice'
import Testimonial from '../Testimonial/Testimonial'
import WPCarousel from '../WPCarousel/WPCarousel'

const Tenants = ({ copy }) => {

    return (
        <>
         <Headline copy={copy.headline} />
         <PropertySearch copy={copy.sectionOne} />
         <ProcessContainer copy={copy.process} />
         <HouseMate copy={copy.sectionTwo} />
         <Algorithm copy={copy.sectionThree} />
         <PressReel copy={copy.pressReel} />
         <IdealChoice copy={copy.sectionFour} />
         <Testimonial copy={copy.testimonials} />
         <WPCarousel copy={copy.properties} />
         <WPCarousel copy={copy.blogs} />
        </>
    )
}

export default Tenants