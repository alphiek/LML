import React from 'react'
import { TestimonialOne } from '../../../images/queries/TestimonialOne'
import { TestimonialTwo } from '../../../images/queries/TestimonialTwo'
import { TestimonialCardContainer } from '../../containers/Containers'
import TestimonialCard from './TestimonialCard'

export const DesktopView = ({ copy }) => {
    return (
        <TestimonialCardContainer noWrap justifyCenter alignCenter >
            {
                copy.one &&
                <TestimonialCard copy={copy.one} color={copy.squiggle}>
                    <TestimonialOne />
                </TestimonialCard>

            }
            {
                copy.two &&
                <TestimonialCard copy={copy.two} color={copy.squiggle}>
                    <TestimonialTwo />
                </TestimonialCard>
            }
        </TestimonialCardContainer>
    )
}

export default DesktopView


