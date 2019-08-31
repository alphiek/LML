import React from 'react'
import { TestimonialCardContainer } from '../../containers/Containers'
import { TestimonialOne } from '../../../images/queries/TestimonialOne'
import TestimonialCard from './TestimonialCard'

export const MobileView = ({ copy }) => {
    return (
        <TestimonialCardContainer>
            {
                copy.one &&
                <TestimonialCard copy={copy.one} color={copy.squiggle}>
                    <TestimonialOne />
                </TestimonialCard>
            }
        </TestimonialCardContainer>
    )
}

export default MobileView
