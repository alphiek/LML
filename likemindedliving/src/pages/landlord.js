import React from "react"
import { Helmet } from 'react-helmet'
import Landlords from '../components/PageLayout/Landlords'
import { landlord } from '../copy/landlords'

const LandlordPage = () => {
  return (
    <>
    <Helmet>
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
      <link rel="stylesheet" type='text/css' href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
    </Helmet>
    <Landlords copy={landlord} />
  </>
  )  
}

export default LandlordPage