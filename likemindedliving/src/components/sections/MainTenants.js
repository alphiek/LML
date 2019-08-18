import React from 'react'

import { tenants } from '../../copy/tenants'
import SectionTemplate from './SectionTemplate';

const MainTenants = () => {
    let tenantSections = Object.entries(tenants)

    return (
        tenantSections.map((item, index) => <SectionTemplate key={index} copy={item}/>)
    )
}

export default MainTenants