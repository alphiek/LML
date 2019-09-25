import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import { FullWidthText } from '../text/TextSection'
import BlogContent from './Blogs/BlogContent'

export const CardContainer = styled.li`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5em;
  width: 14rem;
  height: 300px;
  margin: 0.5rem;
  transition: all .2s ease-in-out;
  box-shadow: 0 10px 18px -3px rgba(75, 74, 104, 0.25), 0 4px 6px -2px rgba(75, 74, 104, 0.05);
  :hover {
    box-shadow: 0 25px 25px -15px rgba(75, 74, 104, 0.45);
    transform: scale(1.02);
    transform: translate(0, -0.1em);
    @media (max-width: 768px) {
    box-shadow: 0 10px 18px -3px rgba(75, 74, 104, 0.25), 0 4px 6px -2px rgba(75, 74, 104, 0.05);
    transform: none;
    }
  }
  &: first-child {
    margin-left: 16rem;
  }
  &: last-child {
    margin-right: 10rem;
  }   
  @media(max-width: 768px) {
      transition: none;
    }
  }
`

const ScrollContainer = styled.ul`
  display: flex;
  width: 100%;
  margin: 2rem 0;
  padding: 2rem 0;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }
  scrollbar-width: none;
`
const Section = styled(Flex)`
  width: 100%;
`

const WPCarousel = ({ copy }) => {

  let section;

  if (copy.properties) {
    section = <BlogContent page='tenants' />
  } else {
    section = <BlogContent page={copy.page} />
  }

  return (
    <Section justifyCenter alignCenter>
      <FullWidthText
        h2={copy.h2}
        p2={copy.h2p2}
        color={copy.color} />
      <ScrollContainer>
        {section}
      </ScrollContainer>
    </Section>
  )
}



export default WPCarousel