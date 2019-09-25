import React from 'react'
import styled from 'styled-components'
import SlideContainer from './SlideContainer'
import Heading from './Heading'


const ProcessSection = styled.section`
 width: 100%;
 display: flex;
 flex-wrap: nowrap;
 justify-content: center;
 align-items: center;
 background-color: ${props => props.bgColor};
 padding: 1.5rem 0;
 @media (max-width: 1024px) {
     flex-direction: column;
 }
`

const ProcessContainer = ({ copy }) => {

  return (
    <ProcessSection bgColor={copy.bgColor}>
      <Heading 
        h3={copy.h3}
        p={copy.p1}
        color={copy.color}
        divider={copy.divider}
        />
      <SlideContainer copy={copy.steps} link={copy.link}/>
    </ProcessSection>
  )
}

export default ProcessContainer