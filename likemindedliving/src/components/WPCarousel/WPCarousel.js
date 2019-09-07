import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import { FullWidthText } from '../text/TextSection'
import { LinkWrapperRight } from '../../global/Links/LinkStyles'
import { CarouselLink } from '../../global/Links/CarouselLink'
import Card from './Card'
import { propertyData } from './Properties/propertyData'
import { blogData } from './Blogs/blogData'
import { FadeInRight, FadeIn } from '../animations/FadeIn'


export const CardContainer = styled.div`
   border-radius: 0.5em;
   width: 8.5em;
   height: 100%;
   overflow: hidden;
   margin: 0.2em;
   transition: all .2s ease-in-out;
   box-shadow: 0 10px 18px -3px rgba(75, 74, 104, 0.25), 0 4px 6px -2px rgba(75, 74, 104, 0.05);
   :hover {
    box-shadow: 0 25px 25px -15px rgba(75, 74, 104, 0.45);
    transform: scale(1.02);
    transform: translate(0, -0.1em);
    @media (max-width: 768px) {
    box-shadow: 0 25px 25px -15px rgba(75, 74, 104, 0.45);
    transform: none;
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
    overflow: visable;
    will-change: scroll-position;
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

const HorizontalScroll = styled.ul`
  -webkit-overflow-scrolling: touch;
  display: grid;
  cursor: pointer;
  grid-gap: 0em;
  grid-template-columns: 30em repeat(7, 9.5em);
  grid-template-rows: minmax(8em, 1fr);
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  padding-bottom: 0.5em;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  @media (max-width: 1024px) {
    grid-template-columns: 22em repeat(7, 9.5em);
  }
  @media (max-width: 768px) {
    grid-template-columns: 18em repeat(7, 9.5em);
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
  }
  scrollbar-width: none;
  @media (max-width: 1024px) {
    margin-top: 1.5em;
  }
`


const WPCarousel = ({ copy }) => {

  let section = copy[0]
  let propData = Object.entries(propertyData)
  let bgData = Object.entries(blogData)
  let content;

  if (section === 'properties') {
    content = propData.map(item => <GridItem><Card data={item} /></GridItem>)
  } else if (section === 'blogs') {
    content = bgData.map(item => <GridItem><Card data={item} /></GridItem>)
  } else {
    content = <p>Something is wrong here</p>
  }

  return (
    <>
      <FullWidthText copy={copy[1]} />
      <Flex justifyEnd alignCenter>
        <ContainerGrid>
          <FadeInRight duration={1800}>
            <div>
              <HorizontalScroll>
                {content}
              </HorizontalScroll>
            </div>
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