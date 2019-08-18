import React from 'react'

import Toggle from '../../global/Toggle'
import Portal from '../../portal/Portal'
import LinkList from '../../global/Links/LinkList'
import Burger from './Burger'
import { TabletMenuContainer, FixedWrapper } from '../containers/Containers'


const TabletView = ({ items }) => {
    let data = items.map(e => <LinkList key={e.name} link={e} />)
    return (
        <Toggle
            toggle={show => <div onClick={show}>
                <Burger />
            </div>}
            content={hide => (
                <Portal>
                    <FixedWrapper>
                        <TabletMenuContainer>
                            <button onClick={hide}>X</button>
                            <li><a href='www'>landlords & estate agents</a></li>
                            {data}
                        </TabletMenuContainer>
                    </FixedWrapper>
                </Portal>
            )}
        />
    )
}

export default TabletView
