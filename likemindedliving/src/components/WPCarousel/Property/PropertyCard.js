import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import Icons from "../../Icons/Icons"
import { colors } from "../../Utilities/colors"
import {
  CardImageWrapper,
  CardTextContainer,
  CardBody,
  CardLink,
  CardPrice,
  HR,
  Description,
} from "../styles"

const Image = styled(Img)`
  width: 100%;
  opacity: 0.9;
  object-position: 50% 50%;
`

const PropertyCard = ({ content }) => {
  return (
    <>
      <CardImageWrapper>
        <Image fluid={content.image.fluid} alt={content.image.alt} />
      </CardImageWrapper>
      <CardTextContainer>
        <div>
          <CardBody>{content.location}</CardBody>
          <h4>{content.title}</h4>
          <CardPrice>{`£${content.price} p.c.m`}</CardPrice>
          <Icons fill={colors.mint} name="dividerShort" />
        </div>
        <Description>{content.shortdescription}</Description>
        <div>
          <HR />
          <CardLink
            href={content.linkurl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Property
          </CardLink>
        </div>
      </CardTextContainer>
    </>
  )
}

export default PropertyCard
