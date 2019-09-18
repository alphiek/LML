import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import { FullWidthText } from '../text/TextSection'
import { LinkWrapperRight } from '../../global/Links/LinkStyles'
import { CarouselLink } from '../../global/Links/CarouselLink'
import Card from './Card'
import { propertyData } from './Properties/propertyData'
import { FadeInRight, FadeIn } from '../animations/FadeIn'
import BlogContent from './Blogs/BlogContent'
import { ShortDivider } from '../Dividers/Dividers'


export const CardContainer = styled.div`
   border-radius: 0.5em;
   width: 12em;
   height: 100%;
   position: relative;
   overflow: hidden;
   margin: 0.2em;
   transition: all .2s ease-in-out;
   box-shadow: 0 10px 18px -3px rgba(75, 74, 104, 0.25), 0 4px 6px -2px rgba(75, 74, 104, 0.05);
   &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    -webkit-appearance: none;
   }
    scrollbar-width: none;
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
        margin-left: 8.55em;
      }
      @media (max-width: 768px) {
        margin-left: 5.5em;
      }
      @media (max-width: 480px) {
        margin-left: 4.5em;
      }
    }
`

const HorizontalScroll = styled.ul`
  -webkit-overflow-scrolling: touch;
  display: grid;
  cursor: pointer;
  grid-gap: 0.2em;
  grid-template-columns: 30em repeat(7, 9.5em);
  grid-template-rows: minmax(8em, 1fr);
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  padding: 1% 0 0.5em 0;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }
  scrollbar-width: none;
  @media (max-width: 1024px) {
    grid-template-columns: 18em repeat(7, 9.5em);
  }
  @media (max-width: 768px) {
    grid-template-columns: 15em repeat(7, 9.5em);
  }
  @media (max-width: 480px) {
    grid-template-columns: 14em repeat(7, 9.5em);
  }
`


const ContainerGrid = styled.div`
  align-content: center;
  -webkit-overflow-scrolling: touch;
  cursor: grabbing;
  overflow: scroll;
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }
  scrollbar-width: none;
  @media (max-width: 1024px) {
    margin-top: 1em;
  }
`

const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }
    scrollbar-width: none;
`

const WPCarousel = ({ copy }) => {
  
  let section = copy[0]
  let page = copy[1].page
  let propData = Object.entries(propertyData)
  let content;

  if (section === 'properties') {
    content = propData.map((item, index) => <GridItem key={index}><Card data={item} /></GridItem>)
  } else if (section === 'blogs') {
    content = <BlogContent page={page}/>
  } else {
    content = <p>Something is wrong here</p>
  }

  return (
    <>
      <FullWidthText copy={copy[1]}>
      {
         copy[1].divider && <ShortDivider bottom='0' top='0.5em' color={copy[1].divider} width='3.5em' />
         
      }
      </ FullWidthText>
      <Flex justifyEnd alignCenter>
        <ContainerGrid>
          <FadeInRight duration={1800}>
            <Wrapper>
              <HorizontalScroll>
                {content}
              </HorizontalScroll>
            </Wrapper>
          </FadeInRight>
        </ContainerGrid >
      </Flex >
      <LinkWrapperRight>
        <FadeIn>
          <CarouselLink link={copy[1].link} />
        </FadeIn>
      </LinkWrapperRight>
    </>
  )
}



export default WPCarousel