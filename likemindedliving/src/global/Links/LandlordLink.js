import React from 'react'
import Hover from './Hover'
import { Link } from 'gatsby'

const LandlordLink = () => {
    return (
        <Hover>
            <li style={{zIndex: '10'}}>
                <Link                    
                    to='/landlord'
                    aria-label={`Link to landlord & estate agents page`}
                    activeStyle={{ opacity: 0 }}
                    partiallyActive={true}
                >landlords & estate agents</Link>
            </li>
        </Hover>
    )
}

export default LandlordLink