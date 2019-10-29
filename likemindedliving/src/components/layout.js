import React from "react"
import PropTypes from "prop-types"
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { linkUrls } from './links'


const Layout = ({ children }) => {
  return (
      <div>
        <Header items={linkUrls} />
        <main>{children}</main>
        <Footer />
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
