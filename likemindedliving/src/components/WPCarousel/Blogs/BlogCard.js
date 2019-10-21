import React from 'react'
import { ShortDivider } from '../../Dividers/Dividers'
import { colors } from '../../../global/colors'
import {
  CardImageWrapper,
  Image,
  CardTextContainer,
  CardLink,
  HR,
  Description
} from '../styles'


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
        <div>
          <h4>{data.title.substring(0, 50)}...</h4>
          <ShortDivider color={colors.lilac} width='3rem' top='0.2rem' bottom='0.2rem' />
          <Description>{data.excerpt.substring(0, 90)}...</Description>
        </div>
        <HR />
        <CardLink
          href={`https://www.likemindedliving.co.uk/blog/${data.slug}`}
          target='_blank' rel='noopener noreferrer'>Read More</CardLink>
      </CardTextContainer>
    </>
  )
}

export default BlogCard
