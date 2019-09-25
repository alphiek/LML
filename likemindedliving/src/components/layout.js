import React from "react"
import PropTypes from "prop-types"
import Header from '../components/header/Header'
import Footer from './footer/footer'
import { linkUrls } from '../copy/links'


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
