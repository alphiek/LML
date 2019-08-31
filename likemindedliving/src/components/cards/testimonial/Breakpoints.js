import React from 'react'
import { ResponsiveLayout } from '../../../global/ResponsiveLayout'
import MobileView from './MobileView'
import DesktopView from './DesktopView'

const Breakpoints = ({ copy }) => (
    <ResponsiveLayout
      breakpoint={768}
      renderDesktop={() => (
          <DesktopView copy={copy}/>
      )}
      renderTablet={() => (
          <MobileView copy={copy} />
      )}
      />
)

export default Breakpoints