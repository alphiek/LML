import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'

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


const SlideContainer = ({ copy }) => {
    const [ currentSlide, updateSlide ] = useState(1)
    let content = copy[currentSlide]
    console.log(copy)

    return (
        <>
            <Number justifyEnd>{currentSlide}</Number>
            <Image justifyCenter contentCenter>image</Image>
            <Content contentCenter>{content}</Content>
            <button onClick={() => updateSlide(3)}>Click</button>
            <button onClick={() => updateSlide(currentSlide + 1)}>Next</button>
            <button onClick={() => updateSlide(currentSlide - 1)}>Previous</button>
        </>
    )
}

export default SlideContainer