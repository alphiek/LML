import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import { FullWidthText } from '../text/TextSection'
import { LinkWrapperRight } from '../containers/Containers'
import { CarouselLink } from '../../global/Links/CarouselLink'
import Card from './Card'
import { propertyData } from './Properties/propertyData'
import { blogData } from './Blogs/blogData'


const HorizontalScroll = styled.ul`
  -webkit-overflow-scrolling: touch;
  display: grid;
  grid-gap: 0.2em;
  grid-template-columns: repeat(8, 8em);
  grid-template-rows: minmax(8em, 1fr);
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  padding-bottom: 0.5em;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`


const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  overflow-x: scroll;
  width: 60%;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const GridItem = styled.li`
    scroll-snap-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
`



const WPCarousel = ({ copy }) => {

    let section = copy[0]
    let propData = Object.entries(propertyData)
    let bgData = Object.entries(blogData)
    let content;

    if (section === 'properties') {
       content = propData.map(item => <GridItem><Card data={item}/></GridItem>)
    } else if (section === 'blogs') {
       content = bgData.map(item => <GridItem><Card data={item}/></GridItem>)
    } else {
        content = <p>Something is wrong here</p>
    }


    return (
        <>
        <FullWidthText copy={copy[1]} />
        <Flex justifyCenter alignCenter>
            <ContainerGrid>
                <HorizontalScroll>
                    {content}
                </HorizontalScroll>
            </ContainerGrid >
        </Flex >
        <LinkWrapperRight>
                <CarouselLink link={copy[1].link} />
        </LinkWrapperRight>
        </>
    )
}



export default WPCarousel