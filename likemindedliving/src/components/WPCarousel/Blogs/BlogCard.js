import React from 'react'
import { ShortDivider } from '../../Dividers/Dividers'
import { colors } from '../../../global/colors'
import { 
  CardBody, 
  CardImageWrapper, 
  Image, 
  CardTextContainer, 
  CardLink } from '../styles'


const BlogCard = ({ data }) => {

  let imageData = data.featuredImage;
  let imageUrl;

  for (let item in imageData) {
    if (item === 'sourceUrl') {
      imageUrl = imageData[item]
    }
  }

  return (
    <>
      <CardImageWrapper><Image src={imageUrl} /></CardImageWrapper>
      <CardTextContainer>
        <h4>{data.title}</h4>
        <ShortDivider color={colors.lilac} width='3rem' top='0.2rem' bottom='0.2rem' />
        <CardBody>{data.excerpt.substring(0, 90)}...</CardBody>
        <CardLink
          href={`https://www.likemindedliving.co.uk/blog/${data.slug}`}
          target='_blank' rel='noopener noreferrer'>Read More</CardLink>
      </CardTextContainer>
    </>
  )
}

export default BlogCard
