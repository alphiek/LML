import React from 'react'
import { useSlides } from '../../hooks/useSlides'
import Swiper from 'react-id-swiper'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const SlideShow = () => {
  const data = useSlides()

  let slides =
    data &&
    data.edges.map(({ node }) => (
      <div key={node.id}>
        <Slide fluid={node.childImageSharp.fluid} alt="" />
      </div>
    ))

  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    effect: 'fade',
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  }

  return <Swiper {...params}>{slides}</Swiper>
}

const Slide = styled(Img)`
  width: 100%;
  height: 65vh;
`
