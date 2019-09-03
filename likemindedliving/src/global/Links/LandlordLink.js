import React from 'react'
import Hover from './Hover'
import { GatsbyLink } from './LinkStyles'

const LandlordLink = () => {
    return (
        <Hover>
            <li style={{zIndex: '10'}}>
                <GatsbyLink                   
                    to='/landlord'
                    aria-label={`Link to landlord & estate agents page`}
                    activeStyle={{ color: 'white' }}
                    partiallyActive={true}
                >landlords & estate agents</GatsbyLink>
            </li>
        </Hover>
    )
}

export default LandlordLink