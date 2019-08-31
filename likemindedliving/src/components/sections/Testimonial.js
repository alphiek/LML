import React from 'react'
import { FullWidthText } from '../text/TextSection'
import { TestimonialContainer, TestimonialHeadingContainer, TestimonialHeadingWrapper} from '../containers/Containers'
import Breakpoints from '../cards/testimonial/Breakpoints'

const Testimonial = ({ copy }) => {
    return (
        <TestimonialContainer column>
            <TestimonialHeadingContainer>
                <TestimonialHeadingWrapper>
                    <FullWidthText copy={copy[1]} />
                </TestimonialHeadingWrapper>
            </TestimonialHeadingContainer>
           <Breakpoints copy={copy[1].testimonial} />
        </ TestimonialContainer>
    )
}

export default Testimonial
