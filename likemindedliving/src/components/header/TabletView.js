import React from 'react'
import styled from 'styled-components'

import Toggle from '../../hooks/Toggle'
import Portal from '../../portal/Portal'
import Link from '../../global/Link'
import Burger from './Burger'
import { colors } from '../../global/colors'

const FixedWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  padding: 1em;
  background-color: ${colors.mint};
`

const TabletMenuContainer = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

const TabletView = ({ items }) => {
    let data = items.map(e => <li key={e.name}><Link link={e} /></li>)
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
