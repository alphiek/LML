import React from 'react'
import { HoverPattern } from './HoverPattern'
import { HoverWrapper } from './LinkStyles'

const Hover = ({ children }) => (
    <HoverWrapper>
        {children}
        <HoverPattern />
    </HoverWrapper>
)

export default Hover