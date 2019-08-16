import React from "react"
import PropTypes from "prop-types"

import WindowDimensionsProvider from '../context/windowDimensionsProvider'
import { GlobalStyle } from "../global/globalStyle"
import Header from "./header/Header"
import Footer from './footer/footer'
import { linkUrls } from '../copy/links'

const Layout = ({ children }) => {
  return (
    <WindowDimensionsProvider>
    <GlobalStyle />
      <Header items={linkUrls}/>
        <main>{children}</main>
      <Footer />
    </WindowDimensionsProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
