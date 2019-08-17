import React from 'react'
import { ResponsiveLayout } from '../../global/ResponsiveLayout'
import TabletView from './TabletView'
import DesktopView from './DesktopView'

const NavBreakpoints = ({ items }) => (
    <ResponsiveLayout
      breakpoint={991}
      renderDesktop={() => (
          <DesktopView items={items}/>
      )}
      renderTablet={() => (
          <TabletView items={items} />
      )}
      />
)

export default NavBreakpoints