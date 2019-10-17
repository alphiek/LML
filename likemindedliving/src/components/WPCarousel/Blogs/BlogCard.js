import React from 'react'
import styled from 'styled-components'
import { ShortDivider } from '../../Dividers/Dividers'
import { colors } from '../../../global/colors'


const CardImageWrapper = styled.div`
   height: 100px;
   width: 100%;
   overflow: hidden;
   background: #4B4A68;
   border-radius: 16px 16px 0 0;
`

const Image = styled.img`
   width: 100%;
   opacity: 0.8;
`

const CardTextContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1rem;
   width: 100%;
`

const CardLink = styled.a`
  font-size: 0.75rem;
  text-transform: uppercase;
  opacity: 0.6;
  font-weight: 700;
  @media (max-width: 1180px) {
    text-align: left;
  }
`

const CardBody = styled.p`
   width: 100%;
   flex: 1 0 auto;
   font-size: 0.8rem;
   line-height: 145%;
   font-family: Montserrat, Arial, Helvetica, sans-serif;
   text-align: left;
   letter-spacing: 0.2px;
`

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
