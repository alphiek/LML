import React from 'react'

import Toggle from '../../global/Toggle'
import Portal from '../../portal/Portal'
import LinkList from '../../global/Links/LinkList'
import LandlordLink from '../../global/Links/LandlordLink'
import Burger from './Burger'
import { TabletMenuContainer, FixedContainer } from '../containers/Containers'


const TabletView = ({ items }) => {
    let data = items.map(e => <LinkList key={e.name} link={e} />)
    return (
        <Toggle
            toggle={show => <div onClick={show}>
                <Burger />
            </div>}
            content={hide => (
                <Portal>
                    <FixedContainer>
                        <TabletMenuContainer>
                            <button onClick={hide}>X</button>
                            <button onClick={hide}><LandlordLink /></button>                            
                            {data}
                        </TabletMenuContainer>
                    </FixedContainer>
                </Portal>
            )}
        />
    )
}

export default TabletView
