import React from 'react'
import { CardContainer } from '../WPCarousel'

import { useBlogData } from '../../../hooks/useBlogData'
import BlogCard from './BlogCard'


const BlogContent = ({ page }) => {
  const data = useBlogData()
  
  let content;
  let tenants = data[1].posts.nodes
  let landlords = data[0].posts.nodes
 
  if (page === 'tenants') {
    content = tenants
  } else if (page === 'landlords') {
    content = landlords
  }
  
  let blogItems = content.map(item => <CardContainer key={item.id}><BlogCard data={item} /></CardContainer>)

  return (
    <>
    {blogItems}
    </>
  )
}

export default BlogContent