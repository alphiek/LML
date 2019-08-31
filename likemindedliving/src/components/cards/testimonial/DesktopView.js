import React from 'react'
import { TestimonialOne } from '../../../images/queries/TestimonialOne'
import { TestimonialTwo } from '../../../images/queries/TestimonialTwo'
import { TestimonialCardWrapper } from '../../containers/Containers'
import Card from './Card'

export const DesktopView = ({ copy }) => {
    console.log(copy)
    return (
            <TestimonialCardWrapper noWrap justifyCenter alignCenter >
                {
                    copy.one &&
                    <Card copy={copy.one} color={copy.squiggle}>
                       <TestimonialOne />
                    </Card>
                    
                }
                {
                    copy.two &&
                    <Card copy={copy.two} color={copy.squiggle}>
                     <TestimonialTwo />
                    </Card>
                }
            </TestimonialCardWrapper>
    )
}

export default DesktopView


