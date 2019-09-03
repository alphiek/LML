import React from 'react'
import { Body } from '../../text/Text'
import { ShortDivider } from '../../Dividers/Dividers'
import { TestimonialCardWrapper, TextWrapper } from '../../containers/Containers'


const TestimonialCard = ({ color, copy, children }) => {
    return (
        <TestimonialCardWrapper>
            {children}
            <TextWrapper>
                <Body>{copy.text}</Body>
                <ShortDivider color={color} width='2.5em' />
                <Body>{copy.name}</Body>
                <Body>{copy.job}</Body>
            </TextWrapper>
        </TestimonialCardWrapper>
    )
}

export default TestimonialCard