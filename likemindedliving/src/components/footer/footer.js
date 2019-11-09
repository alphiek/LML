import React from "react"
import styled from "styled-components"
import { useSiteMetaData } from "../../hooks/useSiteMetaData"
import Flex from "../Containers/Flex"
import Icons from "../Icons/Icons"
import Patterns from "../Patterns/Patterns"
import Terms from "./Terms"

const Footer = () => {
  const { title, address, social } = useSiteMetaData()

  return (
      <footer>
        <address>
          <AddressTitle>{title}</AddressTitle>
          {address.house} <br />
          {address.street} <br />
          {address.town} <br />
          {address.city} <br />
          {address.postal}
          <hr />
          <AddressLink href={`tel:${address.tel}`}>
            Tel: {address.tel}
          </AddressLink>
          <AddressLink href={`mailto:${address.email}`}>
            Email: {address.email}
          </AddressLink>
          <hr />
          <IconWrapper alignCenter justifyBetween>
            <a
              href={social.fb}
              aria-label="Facebook Link"
              target="blank"
              rel="noopener noreferrer"
            >
              <Icons fill="#252454" name="fb" />
            </a>
            <a
              href={social.insta}
              aria-label="Instagram Link"
              target="blank"
              rel="noopener noreferrer"
            >
              <Icons fill="#252454" name="insta" />
            </a>
          </IconWrapper>
        </address>
        <Terms />
        <Copyright>
          © {new Date().getFullYear()} Like-Minded Living, all rights reserved{" "}
        </Copyright>
        <Patterns name="footerPattern" />
      </footer>
  )
}

export default Footer

const AddressTitle = styled.p`
  font-weight: 700;
  font-size: 1.2em;
  padding-bottom: 2em;
  @media (max-width: 1180px) {
    padding-top: 1em;
    padding-bottom: 1em;
  }
`
const AddressLink = styled.a`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: inherit;
  line-height: 170%;
  letter-spacing: 0.02em;
  font-style: normal;
  display: block;
  @media (max-width: 1180px) {
    margin: 0.5em 0;
  }
`

const Copyright = styled.p`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 0.02em;
  font-style: normal;
  margin-top: 1.5em;
`

const IconWrapper = styled(Flex)`
  width: 4.5rem;
`
