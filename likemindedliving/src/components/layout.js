import React from "react"
import PropTypes from "prop-types"

import { GlobalStyle } from "../global/globalStyle"
import Header from "./header/Header"
import Footer from './footer/footer'
import { linkUrls } from '../copy/links'

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
      <Header items={linkUrls}/>
        <main>{children}</main>
      <Footer />
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
