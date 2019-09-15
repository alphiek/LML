import React from 'react'
import styled from 'styled-components'

import { useBlogData } from '../../../hooks/useBlogData'
import BlogCard from '../BlogCard'

const GridItem = styled.li`
    scroll-snap-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    cursor: pointer;
    will-change: scroll-position;
    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
      -webkit-appearance: none;
     }
    scrollbar-width: none;
    padding-bottom: 2em;
    &: first-child {
      margin-left: 20.5em;
      @media (max-width: 1024px) {
        margin-left: 12.5em;
      }
      @media (max-width: 768px) {
        margin-left: 8.5em;
      }
      @media (max-width: 480px) {
        margin-left: 4.5em;
      }
    }
`


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
  
  let blogItems = content.map(item => <GridItem key={item.id}><BlogCard data={item} /></GridItem>)

  return (
    <>
    {blogItems}
    </>
  )
}

export default BlogContent