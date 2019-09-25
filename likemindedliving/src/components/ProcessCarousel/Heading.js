import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import { FadeIn } from '../animations/FadeIn'
import { Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'


const ProcessHeader = styled.div`
  width: 33.3%;
  @media (max-width: 1024px) {
    width: 60%;
    padding: 0;
}
`

const TextContainer = styled(Flex)`
   height: 100%;
   padding: 0 5%;
   @media (max-width: 1024px) {
       width: 100%;
       align-items: center;
       margin: 1rem 0;
       padding: 0;
   }
  `

const Heading = ({ h3, p, color, divider }) => {
  return (
    <ProcessHeader color={color}>
      <TextContainer column justifyCenter contentCenter>
        <FadeIn>
          <h3>{h3}</h3>
        </FadeIn>
        <ShortDivider bottom='0.8em' top='0.5em' color={divider} width='3.5em' />
        <Body color={color}>{p}</Body>
      </TextContainer>
    </ProcessHeader>
  )
}

export default Heading