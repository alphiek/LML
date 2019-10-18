import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { ShortDivider } from '../../Dividers/Dividers'
import { colors } from '../../../global/colors'
import { 
  CardImageWrapper, 
  CardTextContainer, 
  CardBody,
  CardLink } from '../styles'


 const Image = styled(Img)`
   width: 100%;
   opacity: 0.8;
`

const PropertyCard = ({ content }) => {
    
    return (
        <>
      <CardImageWrapper><Image fluid={content.image.fluid} alt={content.image.alt} /></CardImageWrapper>
      <CardTextContainer>
        <h4>{content.shortdescription}</h4>
        <ShortDivider color={colors.mint} width='3rem' top='0.2rem' bottom='0.2rem' />
        <CardBody>{content.location}</CardBody>
        <CardBody>{`£${content.price} p.c.m`}</CardBody>
        <CardLink
          href={content.linkurl}
          target='_blank' rel='noopener noreferrer'>View Property</CardLink>
      </CardTextContainer>
    </>
    )
}

export default PropertyCard
