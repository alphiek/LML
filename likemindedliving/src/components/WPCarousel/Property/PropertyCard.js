import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { ShortDivider } from '../../Dividers/Dividers'
import { colors } from '../../../global/colors'
import {
  CardImageWrapper,
  CardTextContainer,
  CardBody,
  CardLink,
  CardPrice,
  HR,
  Description
} from '../styles'


const Image = styled(Img)`
   width: 100%;
   opacity: 0.8;
   object-position: 50% 50%;
`

const PropertyCard = ({ content }) => {

  return (
    <>
      <CardImageWrapper><Image fluid={content.image.fluid} alt={content.image.alt} /></CardImageWrapper>
      <CardTextContainer>
        <div>
          <CardBody>{content.location}</CardBody>
          <h4>{content.title}</h4>
          <CardPrice>{`£${content.price} p.c.m`}</CardPrice>
          <ShortDivider color={colors.mint} width='3rem' top='0.2rem' bottom='0.2rem' />
        </div>
        <Description>{content.shortdescription}</Description>
        <HR />
        <CardLink
          href={content.linkurl}
          target='_blank' rel='noopener noreferrer'>View Property</CardLink>
      </CardTextContainer>
    </>
  )
}

export default PropertyCard
