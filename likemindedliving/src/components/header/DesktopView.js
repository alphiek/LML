import React from 'react'
import LinkList from '../../global/Links/LinkList'
import LandlordLink from '../../global/Links/LandlordLink'
import { DesktopMenuContainer } from '../containers/Containers'

const DesktopView = ({ items }) => {

    let data = items.map(e =>
        <LinkList key={e.name} link={e} />
    )


    return (
        <DesktopMenuContainer>
            <LandlordLink />
            {data}
        </DesktopMenuContainer>
    )
}

export default DesktopView
