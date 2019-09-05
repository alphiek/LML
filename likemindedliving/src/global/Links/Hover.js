import React from 'react'
import { HoverPattern } from './HoverPattern'
import { HoverWrapper } from './LinkStyles'

const Hover = ({ children, color }) => (
    <HoverWrapper>
        {children}
        <HoverPattern color={color}/>
    </HoverWrapper>
)

export default Hover