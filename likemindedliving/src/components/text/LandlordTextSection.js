import React from 'react'
import Flex from '../containers/Flex'
import { H2, Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import { FadeIn } from '../animations/FadeIn'
import styled from 'styled-components'

const TextContainer = styled(Flex)`
   height: 100%;
   @media (max-width: 1024px) {
       width: 80%;
       align-items: center;
   }
`

const H4 = styled.h4`
  margin-bottom: 1em;
  margin-top: 0.5em;
  color: ${props => props.color};
`

export const LandlordTextSection = ({ copy }) => {

    let fact = Object.entries(copy.fact).map((item, index) => <><FadeIn><H4 color={copy.color} key={index}>{item[1].h4}</H4></FadeIn><Body color={copy.color}>{item[1].p}</Body></>)

    return (
        <TextContainer column justifyCenter contentCenter>
                <FadeIn>
                    <H2 color={copy.color}>{copy.h2}</H2>
                </FadeIn>
           <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
           {fact}
        </TextContainer>
    )
}