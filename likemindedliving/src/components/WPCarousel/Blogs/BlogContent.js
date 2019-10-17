import React from 'react'
import { CardContainer } from '../WPCarousel'

import { useBlogData } from '../../../hooks/useBlogData'
import BlogCard from './BlogCard'


const BlogContent = ({ page }) => {
  const data = useBlogData()

  let tenants = data !== null ? data[1].posts.nodes : <div>Nothing has been returned</div>
  let landlords = data !== null ? data[0].posts.nodes : <div>Nothing was returned</div>  
  let blogItems;

  const getContent = (content) => {
    return content.map(item => <CardContainer key={item.id}><BlogCard data={item} /></CardContainer>)
  }
  
  if (data) {
    page === 'tenants' ? blogItems = getContent(tenants) : blogItems = getContent(landlords)
  } 

  return (
    <>
    {blogItems}
    </>
  )
}

export default BlogContent