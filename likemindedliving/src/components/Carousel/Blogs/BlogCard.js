import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Icons from "../../Icons/Icons"
import { colors } from "../../Utilities/colors"

import {
  CardImageWrapper,
  CardTextContainer,
  CardLink,
  HR,
  Description,
} from "../styles"

const Image = styled(Img)`
  width: 100%;
  opacity: 0.9;
`

const BlogCard = ({ data }) => {
  const getImage = image => {
    let displayImage
    displayImage = image ? (
      <Image
        fluid={data.featuredImage.imageFile.childImageSharp.fluid}
        alt={data.featuredImage.alt}
      />
    ) : (
      <div>There is no image</div>
    )
    return displayImage
  }

  let title

  if (data.title.length > 47) {
    title = `${data.title
      .split("&#8217;")
      .join("'")
      .substring(0, 47)}...`
  } else {
    title = data.title.split("&#8217;").join("'")
  }

  return (
    <>
      <CardImageWrapper>{getImage(data.featuredImage)}</CardImageWrapper>
      <CardTextContainer>
        <TitleHeight>
          <h4>{title}</h4>
          <Icons name="dividerShort" fill={colors.lilac} />
        </TitleHeight>
        <Description>
          {data.excerpt
            .split("&#8217;")
            .join("'")
            .substring(0, 65)}
          ...
        </Description>
        <div>
          <HR />
          <CardLink
            href={`https://www.likemindedliving.co.uk/blog/${data.slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </CardLink>
        </div>
      </CardTextContainer>
    </>
  )
}

export default BlogCard

const TitleHeight = styled.div`
  min-height: 50px;
`
