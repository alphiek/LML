import React from 'react'
import { Body } from '../text/Text'


const Cta = ({ color, cta }) => {
    return (
        <Body color={color}>{cta}</Body>
    )
}

export default Cta