import React from 'react'
import { HoverPattern } from './HoverPattern'
import { HoverWrapper } from './LinkStyles'

const Hover = ({ children, color, margin }) => (
    <HoverWrapper>
        {children}
        <HoverPattern color={color} margin={margin} />
    </HoverWrapper>
)

export default Hover