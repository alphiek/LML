import React from 'react'

import { HoverPattern } from '../global/HoverPattern'

const Hover = ({ children }) => (
    <div style={{ position: 'relative' }}>
        {children}
        <HoverPattern />
    </div>
)

export default Hover