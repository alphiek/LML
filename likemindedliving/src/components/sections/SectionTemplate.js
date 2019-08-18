import React from 'react'

import { Section } from '../containers/Containers';

import Landing from './Landing'
import SectionOne from './SectionOne'
import Process from './Process'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import Properties from './Properties'
import Testimonial from './Testimonial'
import PressReel from './PressReel'
import Blogs from './Blogs'



const SectionTemplate = ({ copy }) => {

    let section;
    if(copy[0] === 'landing') {
        section = <Landing copy={copy}/>
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
        section = <Properties copy={copy}/>
    }  else if (copy[0] === 'testimonials') {
        section = <Testimonial copy={copy}/>
    } else if (copy[0] === 'pressReel') {
        section = <PressReel copy={copy}/>
    } else {
        section = <Blogs copy={copy}/>
    }

    return (
        <Section bgColor={copy[1].bgColor}>
           {section}
        </Section>
    )
}

export default SectionTemplate