import React from "react"
import styled from 'styled-components'
import Icons from "../../Icons/Icons"
import { colors } from "../../../global/colors"
import {
  CardImageWrapper,
  Image,
  CardTextContainer,
  CardLink,
  HR,
  Description,
} from "../styles"

const BlogCard = ({ data }) => {
  let imageData = data.featuredImage
  let imageUrl

  for (let item in imageData) {
    if (item === "sourceUrl") {
      imageUrl = imageData[item]
    }
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
      <CardImageWrapper>
        <Image src={imageUrl} />
      </CardImageWrapper>
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
