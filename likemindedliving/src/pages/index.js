import React from "react"
import Landing from '../components/landing/Landing'
import { tenants } from '../copy/tenants'

const IndexPage = () => {
  return (
    <Landing copy={tenants.landing} />
  )  
}

export default IndexPage
