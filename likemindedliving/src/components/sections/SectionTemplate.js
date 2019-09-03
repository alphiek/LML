import React from 'react'

import { Section } from '../containers/Containers'
import Headline from '../Headline/Headline'


import SectionOne from './SectionOne'
import Process from './Process'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import WPCarousel from './WPCarousel'
import Testimonial from './Testimonial'
import PressReel from './PressReel'


const SectionTemplate = ({ copy }) => {

    let section;
    if(copy[0] === 'headline') {
        section = <Headline copy={copy[1]}/>
    } else if(copy[0] === 'sectionOne') {
        section = <SectionOne copy={copy}/>
    } else if(copy[0] === 'process') {
        section = <Process copy={copy}/>
    } else if(copy[0] === 'sectionTwo') {
        section = <SectionTwo copy={copy}/>
    } else if (copy[0] === 'sectionThree') {
        section = <SectionThree copy={copy}/>
    } else if (copy[0] === 'sectionFour') {
        section = <SectionFour copy={copy}/>
    } else if (copy[0] === 'properties') {
        section = <WPCarousel copy={copy}/>
    }  else if (copy[0] === 'testimonials') {
        section = <Testimonial copy={copy}/>
    } else if (copy[0] === 'pressReel') {
        section = <PressReel copy={copy}/>
    } else {
        section = <WPCarousel copy={copy}/>
    }

    return (
        <Section bgColor={copy[1].bgColor}>
           {section}
        </Section>
    )
}

export default SectionTemplate