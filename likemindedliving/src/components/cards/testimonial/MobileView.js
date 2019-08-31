import React from 'react'
import { TestimonialCardWrapper } from '../../containers/Containers'
import { TestimonialOne } from '../../../images/queries/TestimonialOne'

export const MobileView = ({ copy }) => {
    return (
                <TestimonialCardWrapper>
                    {
                        copy.one &&
                        <TestimonialOne />
                    }
                </TestimonialCardWrapper>
        )
}

export default MobileView
