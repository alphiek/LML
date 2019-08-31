import React from 'react'
import { FullWidthText } from '../text/TextSection'
import { TestimonialContainer, TestimonialHeaderWrapper, TestimonialTextWrapper } from '../containers/Containers'
import Breakpoints from '../cards/testimonial/Breakpoints'

const Testimonial = ({ copy }) => {
    return (
        <TestimonialContainer column>
            <TestimonialHeaderWrapper>
                <TestimonialTextWrapper>
                    <FullWidthText copy={copy[1]} />
                </TestimonialTextWrapper>
            </TestimonialHeaderWrapper>
           <Breakpoints copy={copy[1].testimonial} />
        </ TestimonialContainer>
    )
}

export default Testimonial
