import React from 'react'
import GatsbyNavLink from '../Links/GatsbyNavLink'
import NavLinks from '../Links/NavLinks'

const GetLinks = () => {
  return (
    <>
    <GatsbyNavLink name='tenants' url='/' />
    <GatsbyNavLink name='landlords & estate agents' url='/landlords-estate-agents' />
    <NavLinks name='blogs' url='https://likemindedliving.co.uk/blog' />
    <NavLinks name='search properties' url='https://likemindedliving.co.uk/properties' />
    <NavLinks name='property management portal' url='https://likemindedliving.outgrow.us/likemindedliving-30' />
    <NavLinks name='contact us' url='https://likemindedliving.outgrow.us/likemindedliving-45' />
  </>
  )
}

export default GetLinks
