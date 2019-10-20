import React from 'react'
import Swiper from 'react-id-swiper';
import { CardContainer } from '../WPCarousel'

import { useBlogData } from '../../../hooks/useBlogData'
import BlogCard from './BlogCard'


const BlogContent = ({ page }) => {
  const data = useBlogData()
  
  let tenants;
  let landlords;
  let blogItems;

  const getContent = (content) => {
    return content.map(item => <CardContainer key={item.id}><BlogCard data={item} /></CardContainer>)
  }

  if (data) {
    tenants = data[1].posts.nodes
    landlords = data[0].posts.nodes 
    page === 'tenants' ? blogItems = getContent(tenants) : blogItems = getContent(landlords)
  } else {
    blogItems = <div>Nothing was returned</div>
  } 

  const params = {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      1180: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  }

  return (
    <Swiper {...params}>
    {blogItems}
    </Swiper>
  )
}

export default BlogContent