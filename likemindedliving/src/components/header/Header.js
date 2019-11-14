import React from 'react'

import { useToggle } from '../../hooks/useToggle'
import Backdrop from '../Containers/Backdrop'
import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'

const Header = () => {
  const { isShowing, toggle } = useToggle(false)

  return (
    <>
      <header>
        <nav>
          <Toolbar toggleHandler={toggle} />
        </nav>
      </header>
      <SideDrawer show={isShowing} />
      {isShowing && <Backdrop hide="hide" click={toggle} />}
    </>
  )
}

export default Header
