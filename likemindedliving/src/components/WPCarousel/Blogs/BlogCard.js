import React from 'react'
import Icons from '../../Icons/Icons'
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
   
  let title;

  if (data.title.length > 50) {
    title = `${data.title
      .split('&#8217;')
      .join("'")
      .substring(0, 50)}...`
  } else {
    title = data.title
      .split('&#8217;')
      .join("'")      
  }

  return (
    <>
      <CardImageWrapper><Image src={imageUrl} /></CardImageWrapper>
      <CardTextContainer>
        <div>
          <h4>{title}</h4>
          <Icons name='dividerShort' fill={colors.lilac}/>
          <Description>{data.excerpt.split('&#8217;').join("'").substring(0, 90)}...</Description>
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
