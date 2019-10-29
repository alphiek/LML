import React from "react"
import styled from "styled-components"
import { CarouselTextSection } from "../Text/CarouselTextSection"
import { FullSection } from "../Containers/Containers"
import { FadeIn } from "../Animations/FadeIn"
import Flex from "../Containers/Flex"
import Icons from "../Icons/Icons"
import PropertyContent from "./Property/PropertyContent"
import BlogContent from "./Blogs/BlogContent"
import { carouselCopy } from "./carouselCopy"

const WPCarousel = ({ name }) => {
  const copy = carouselCopy[name]

  let section
  if (name === 'properties') {
    section = <PropertyContent />
  } else {
    section = <BlogContent page={copy.page} />
  }

  return (
    <FullSection>
      <FadeIn>
        <CarouselTextSection
          h2={copy.h2}
          p2={copy.h2p2}
          link={copy.link}
          color={copy.color}
        >
          {copy.divider && <Icons name="dividerShort" fill={copy.divider} />}
        </CarouselTextSection>
        <Flex row nowrap justifyCenter alignCenter>
          <SwipeIndicator>
            &#60;<Hide>&#60;&#60;</Hide>
          </SwipeIndicator>
          <SlideContainer>{section}</SlideContainer>
          <SwipeIndicator>
            &#62;<Hide>&#62;&#62;</Hide>
          </SwipeIndicator>
        </Flex>
      </FadeIn>
    </FullSection>
  )
}

export default WPCarousel

const SwipeIndicator = styled.p`
  font-size: 60px;
  color: #bef1e9;
  font-weight: 900;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Hide = styled.span`
  @media (max-width: 1250px) {
    display: none;
  }
`

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
  box-shadow: 0px 6px 12px 0px rgba(75,74,104,0.2);
  }
`

const SlideContainer = styled.div`
  width: 1050px;
  height: 450px;
  @media (max-width: 1180px) {
    width: 80vw;
    max-width: 980px;
  }
  @media (max-width: 950px) {
    max-width: 620px;
  }
  @media (max-width: 680px) {
    max-width: 310px;
  }
`
