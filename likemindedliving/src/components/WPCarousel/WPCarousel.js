import React from 'react'
import styled from 'styled-components'
import { CarouselText } from '../text/TextSection'
import BlogContent from './Blogs/BlogContent'
import PropertyContent from './Property/PropertyContent'
import { FullSection } from '../containers/Containers'
import { ShortDivider } from '../Dividers/Dividers'

export const CardContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  margin: 2rem 0;
  border: 1px solid B1AFD2;
  box-shadow: 0 10px 18px -3px rgba(75, 74, 104, 0.25), 0 4px 6px -2px rgba(75, 74, 104, 0.05);
  }
`

const SlideContainer = styled.div`
  width: 1050px;
  height: 500px;
  padding: 20px 0;
  @media (max-width: 1180px) {
    width: 80vw;
}
`

const WPCarousel = ({ copy }) => {
  let section;

  if (copy.properties) {
    section = <PropertyContent />

  } else {
    section = <BlogContent page={copy.page} />
  }

  return (
    <FullSection>
      <CarouselText
        h2={copy.h2}
        p2={copy.h2p2}
        link={copy.link}
        color={copy.color}>
        {
          copy.divider && <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
        }
      </CarouselText>
      <SlideContainer>
        {section}
      </SlideContainer>
    </FullSection>
  )
}



export default WPCarousel