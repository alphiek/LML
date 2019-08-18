import React from 'react'

import LinkList from '../../global/Links/LinkList'
import { DesktopMenuContainer } from '../containers/Containers'

const DesktopView = ({ items }) => {

    let data = items.map(e =>
        <LinkList key={e.name} link={e} />
    )


    return (
        <DesktopMenuContainer>
            <li><a href='www'>landlords & estate agents</a></li>
            {data}
        </DesktopMenuContainer>
    )
}

export default DesktopView
