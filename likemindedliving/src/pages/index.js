import React from "react"
import Main from '../components/sections/Main'
import { tenants } from '../copy/tenants'

const IndexPage = () => {
  return (
    <Main data={tenants} />
  )  
}

export default IndexPage
