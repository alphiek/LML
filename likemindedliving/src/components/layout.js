import React from "react"
import PropTypes from "prop-types"

import { GlobalStyle } from "../global/globalStyle"

import Header from "./header"
import Footer from './footer/footer'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
