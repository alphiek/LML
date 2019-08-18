import React from 'react'
import { FullWidthText } from '../text/TextSection'

const Testimonial = ({ copy }) => {
    return (
        <>
        <FullWidthText copy={copy[1]} />
        <div>This will be the testimonial carousel</div>
        </>
    )
}

export default Testimonial