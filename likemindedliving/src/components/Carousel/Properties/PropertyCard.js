import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Icons from '../../Icons/Icons'
import { colors } from '../../Utilities/colors'
import {
  CardImageWrapper,
  CardTextContainer,
  CardBody,
  CardLink,
  CardPrice,
  HR,
  Description,
} from '../styles'

const PropertyCard = ({ content }) => {
  return (
    <>
      <CardImageWrapper>
        <LazyLoadImage
          alt="available properties"
          src={content.image.url}
          height='150px'
          width='100%'
        />
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
