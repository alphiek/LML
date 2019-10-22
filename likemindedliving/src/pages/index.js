import React from "react"
import { Helmet } from 'react-helmet'
import ModalControl from '../components/containers/Modal/ModalControl'
import Tenants from '../components/PageLayout/Tenants'
import { tenants } from '../copy/tenants'


const IndexPage = () => {
  return (
    <>
    <Helmet>
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
        <link rel="stylesheet" type='text/css' href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
      </Helmet>
      <ModalControl />
      <Tenants copy={tenants} />
    </>
  )
}

export default IndexPage



