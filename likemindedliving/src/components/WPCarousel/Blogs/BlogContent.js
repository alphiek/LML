import React from 'react'
import { CardContainer } from '../WPCarousel'

import { useBlogData } from '../../../hooks/useBlogData'
import BlogCard from './BlogCard'


const BlogContent = ({ page }) => {
  const data = useBlogData()

  let tenants = data[1].posts.nodes
  let landlords = data[0].posts.nodes
  let blogItems;

  const getContent = (content) => {
    return content.map(item => <CardContainer key={item.id}><BlogCard data={item} /></CardContainer>)
  }
  
  if (data) {
    if (page === 'tenants') {
      blogItems = getContent(tenants)
    } else if (page === 'landlords') {
      blogItems = getContent(landlords)
    }
  } else {
    console.log('no data')
    return blogItems = 'Blogs are not available offline, please check your connection'
  } 

  

  return (
    <>
    {blogItems}
    </>
  )
}

export default BlogContent