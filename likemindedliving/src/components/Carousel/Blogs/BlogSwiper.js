import React from "react"
import Swiper from "react-id-swiper"
import { CardContainer, CardSpacer } from "../Carousel"

import { useBlogData } from "../../../hooks/useBlogData"
import BlogCard from "./BlogCard"

const BlogSwiper = ({ page }) => {
  const data = useBlogData()

  let tenants
  let landlords
  let blogItems

  const getContent = content => {
    return content.map(item => (
      <CardSpacer key={item.id}>
        <CardContainer>
          <BlogCard data={item} />
        </CardContainer>
      </CardSpacer>
    ))
  }

  if (typeof data !== `undefined`) {
    tenants = data[1].posts.nodes
    landlords = data[0].posts.nodes
    page === "tenants"
      ? (blogItems = getContent(tenants))
      : (blogItems = getContent(landlords))
  } else {
    blogItems = <div>Nothing was returned</div>
  }

  const params = {
    slidesPerView: 4,
    spaceBetween: 0,
    grabCursor: true,
    breakpoints: {
      1180: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      950: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      680: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  }

  return <Swiper {...params}>{blogItems}</Swiper>
}

export default BlogSwiper
