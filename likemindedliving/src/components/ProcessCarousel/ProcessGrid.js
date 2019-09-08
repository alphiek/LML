import React from 'react'
import styled from 'styled-components'
import SlideContainer from './SlideContainer'
import Heading from './Heading'


const CarouselGrid = styled.div`
  margin: 0 20%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 0.5fr 0.5fr 0.5fr;
  grid-template-areas: 
  'header image'
  '.  image'
  '. content';
  padding-bottom: 2em;   
  @media (max-width: 1024px) {
    grid-template-columns: 100%;
    grid-template-rows: auto 1em 14em auto auto;
    grid-template-areas: 
    'header'
    'number'
    'image' 
    'content';
  }
`

const ProcessGrid = ({ copy }) => {
  return (
    <CarouselGrid>
      <Heading 
        h3={copy.h3}
        p={copy.p1}
        color={copy.color}
        pColor={copy.bgColor}
        />
      <SlideContainer copy={copy.steps} link={copy.link}/>
    </CarouselGrid>
  )
}

export default ProcessGrid