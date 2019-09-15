import React from 'react'
import styled from 'styled-components'
import SlideContainer from './SlideContainer'
import Heading from './Heading'


const CarouselGrid = styled.div`
  margin-bottom: 5%;
  display: grid;
  grid-template-columns: 20% 1fr 1fr 20%;
  grid-template-rows: repeat(2, auto);
  @media (max-width: 1024px) {
    grid-template-columns: 100%;
    margin: 0 20%;
    padding: 2em 0;
    grid-template-rows: repeat(2, auto);
  }
  @media (max-width: 1024px) {
    margin: 0 15%;
  }
`

const ProcessGrid = ({ copy }) => {
  return (
    <CarouselGrid>
      <Heading 
        h3={copy.h3}
        p={copy.p1}
        stripColor={copy.stripColor}
        color={copy.color}
        divider={copy.divider}
        />
      <SlideContainer copy={copy.steps} landlord={copy.landlord} link={copy.link}/>
    </CarouselGrid>
  )
}

export default ProcessGrid