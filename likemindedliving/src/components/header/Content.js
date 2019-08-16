import React from 'react'
import { ResponsiveLayout } from '../ResponsiveLayout'
import TabletView from './TabletView'
import DesktopView from './DesktopView'

const Content = ({ items }) => (
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

export default Content