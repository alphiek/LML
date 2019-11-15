import React from 'react'
import GatsbyNavLink from '../Links/GatsbyNavLink'
import NavLinks from '../Links/NavLinks'

const GetLinks = ({ click }) => {
  return (
    <>
      <li onClick={click}>
        <GatsbyNavLink name="tenants" url="/" />
      </li>
      <li onClick={click}>
        <GatsbyNavLink
          name="landlords & estate agents"
          url="/landlords-estate-agents"
        />
      </li>
      <li>
        <NavLinks name="blogs" url="https://likemindedliving.co.uk/blog" />
      </li>
      <li>
        <NavLinks
          name="search properties"
          url="https://likemindedliving.co.uk/properties"
        />
      </li>
      <li>
        <NavLinks
          name="property management portal"
          url="https://likemindedliving.outgrow.us/likemindedliving-30"
        />
      </li>
      <li>
        <NavLinks
          name="contact us"
          url="https://likemindedliving.outgrow.us/likemindedliving-45"
        />
      </li>
    </>
  )
}

export default GetLinks
