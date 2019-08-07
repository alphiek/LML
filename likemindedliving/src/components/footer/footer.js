import React from 'react'
import { useSiteMetaData } from '../../hooks/useSiteMetaData'
import styled from 'styled-components'

import { Fb, Insta } from './socialIcons'
import Terms from './terms'

const AddressTitle = styled.p`
  font-weight: 700;
  font-size: 1.2em;
  padding-bottom: 2em;
`
const AddressLink = styled.a`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: inherit;
  line-height: 170%;
  letter-spacing: 0.02em;
  font-style: normal;
  display: block;
`

const Copyright = styled.p`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 0.45em;
  letter-spacing: 0.02em;
  font-style: normal;
  margin-top: 1.5em;
`

const Footer = () => {
    const { title, address, social } = useSiteMetaData()

    return (
      <footer>
          <address>
              <AddressTitle>{title}</AddressTitle>
              {address.house} <br/>
              {address.street} <br/>
              {address.town} <br/>
              {address.city} <br/>
              {address.postal}
              <hr />
              <AddressLink href={`tel:${address.tel}`}>Tel: {address.tel}</AddressLink>
              <AddressLink href={`mailto:${address.email}`}>Email: {address.email}</AddressLink>
              <hr />
              <a href={social.fb}
                 aria-label='Facebook Link'
                 target='blank'
                 rel='noopener noreferrer'>
                   <Fb />                      
              </a>
              <a href={social.insta}
                 aria-label='Instagram Link'
                 target='blank'
                 rel='noopener noreferrer'>
                   <Insta />                      
              </a>
          </address>
          <Terms />
          <Copyright>© {new Date().getFullYear()} Like-Minded Living, all rights reserved </Copyright>
      </footer>
    )
}

export default Footer


