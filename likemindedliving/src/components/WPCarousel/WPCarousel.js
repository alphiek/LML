import React from 'react'
import styled from 'styled-components'
import { FullWidthText } from '../text/TextSection'
import BlogContent from './Blogs/BlogContent'
import PropertyContent from './Property/PropertyContent'

export const CardContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  border-radius: 16px;
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
  @media(max-width: 768px) {
      transition: none;
    }
  }
`

const SlideContainer = styled.div`
  width: 950px;
  padding: 50px 0;
  @media (max-width: 1180px) {
    width: 80vw;
}
`
const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WPCarousel = ({ copy }) => {
  let section;

  if (copy.properties) {
    section = <PropertyContent />
  } else {
    section = <BlogContent page={copy.page} />
  }

  return (
    <Section>
      <SlideContainer>
      <FullWidthText
        h2={copy.h2}
        p2={copy.h2p2}
        color={copy.color} />
        {section}
      </SlideContainer>
    </Section>
  )
}



export default WPCarousel