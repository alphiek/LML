import React from "react"
import PropTypes from "prop-types"

import { useToggle } from "../../hooks/useToggle"

import Toolbar from "./Toolbar/Toolbar"
import SideDrawer from "./SideDrawer/SideDrawer"
import Backdrop from "../containers/Backdrop"

const Header = ({ items }) => {
  const { isShowing, toggle } = useToggle(false)

  return (
    <>
      <header>
        <nav>
          <Toolbar items={items} toggleHandler={toggle} />
        </nav>
      </header>
      <SideDrawer show={isShowing} items={items} />
      {isShowing && <Backdrop hide="hide" click={toggle} />}
    </>
  )
}

export default Header

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
