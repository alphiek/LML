import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import PageLink from '../../global/Links/PageLink'
import { FadeIn } from '../animations/FadeIn'
import { Body } from '../text/Text'
import { colors } from '../../global/colors'


const CarouselGrid = styled.div`
  margin: 0 15%;
  display: grid;
  grid-template-columns: repeat(3, minmax(33.33%, 1fr));
  grid-template-rows: auto 14em auto;
  grid-template-areas: 
  'header header header'
  'number image content'
  '. button button';
  padding-bottom: 2em;   
  @media (max-width: 1024px) {
    grid-template-columns: 100%;
    grid-template-rows: auto 1em 14em auto auto;
    grid-template-areas: 
    'header'
    'number'
    'image' 
    'content'
    'button'; 
  }
`

const Header = styled.div`
  grid-area: header;
  width: 40%;
  border-radius: 20px;
  background-color: ${colors.lightPeach};
  padding: 2em 0 1.5em 5%;
  margin-bottom: 2em;
  margin-left: 6%;
  @media(max-width: 1024px) {
    width: 60%;
  }
`

const HeaderWrapper = styled.div`
  width: 80%;
`
const Number = styled(Flex)`
   padding: 1em;
   font-size: 0.5em;
   grid-area: number;
   @media (max-width: 1024px) {
     justify-content: flex-start;
   }
`

const Image = styled(Flex)`
  grid-area: image;
  font-size: 0.5em;
`

const Content = styled(Flex)`
   grid-area: content;
   font-size: 0.5em;
   padding: 1em;
   @media (max-width: 1024px) {
    justify-content: center;
  }
`

const LinkWrapper = styled(Flex)`
   margin-right: 3em;
   grid-area: button;
   @media (max-width: 1024px) {
    margin-right: 0;
    justify-content: center;
  }
`


const ProcessCarousel = ({ copy }) => {
  return (
    <CarouselGrid>
      <Header>
        <HeaderWrapper>
          <FadeIn>
            <h3>{copy.h3}</h3>
          </FadeIn>
          <Body color={copy.color}>{copy.p1}</Body>
        </HeaderWrapper>
      </Header>
      <Number justifyEnd>Number</Number>
      <Image justifyCenter contentCenter>image</Image>
      <Content contentCenter>Content</Content>
      <LinkWrapper justifyEnd>
        <FadeIn>
          <PageLink link={copy.link} />
        </FadeIn>
      </LinkWrapper>
    </CarouselGrid>
  )
}

export default ProcessCarousel