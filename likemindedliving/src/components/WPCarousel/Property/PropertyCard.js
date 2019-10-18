import React from 'react'
import { ShortDivider } from '../../Dividers/Dividers'
import { colors } from '../../../global/colors'
import { 
  CardImageWrapper, 
  Image, 
  CardTextContainer, 
  CardLink } from '../styles'


const PropertyCard = ({ content }) => {
    console.log(content)
    return (
        <>
      <CardImageWrapper><Image src={content.image.fluid.base64} /></CardImageWrapper>
      <CardTextContainer>
        <h4>{content.shortdescription}</h4>
        <ShortDivider color={colors.mint} width='3rem' top='0.2rem' bottom='0.2rem' />
        <p>{content.location}</p>
        <p>{content.price}</p>
        <CardLink
          href={content.linkurl}
          target='_blank' rel='noopener noreferrer'>View Property</CardLink>
      </CardTextContainer>
    </>
    )
}

export default PropertyCard
