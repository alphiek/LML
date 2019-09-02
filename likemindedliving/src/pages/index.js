import React from "react"
import { Helmet } from 'react-helmet'
import Main from '../components/sections/Main'
import { tenants } from '../copy/tenants'
import WindowDimensionsProvider from '../context/windowDimensionsProvider'

const IndexPage = () => {
  return (
    <>
    <WindowDimensionsProvider>
    <Helmet>
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
        <link rel="stylesheet" type='text/css' href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
      </Helmet>
      <Main data={tenants} />
    </WindowDimensionsProvider>
    </>
  )
}

export default IndexPage



