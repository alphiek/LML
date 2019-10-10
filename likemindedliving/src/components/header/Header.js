import React from 'react'
import PropTypes from 'prop-types'
import { useToggle } from '../../hooks/useToggle'
import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'

const Header = ({ items }) => {
  const { isShowing, toggle } = useToggle(false)

  let backDrop;

  if (isShowing) {
    backDrop = <Backdrop click={toggle} />
  }

  return (
    <>
      <Toolbar items={items} toggleHandler={toggle} />
      <SideDrawer show={isShowing} items={items} />
      {backDrop}
    </>
  )
}


export default Header

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}
