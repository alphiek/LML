import React from 'react'
import styled from 'styled-components'
import { CarouselText } from '../text/TextSection'
import BlogContent from './Blogs/BlogContent'
import PropertyContent from './Property/PropertyContent'
import { FullSection } from '../containers/Containers'
import Icons from '../Icons/Icons'


export const CardSpacer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  overflow: visible;
`

export const CardContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  border: 1px solid rgba(75, 74, 104, 0.05);
  box-shadow: 0px 8px 10px 0px rgba(75, 74, 104, 0.18);
  }
`

const SlideContainer = styled.div`
  width: 1050px;
  height: 500px;
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
          copy.divider && <Icons name='dividerShort' fill={copy.divider} />
        }
      </CarouselText>
      <SlideContainer>
        {section}
      </SlideContainer>
    </FullSection>
  )
}



export default WPCarousel