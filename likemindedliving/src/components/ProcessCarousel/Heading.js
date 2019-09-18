import React from 'react'
import styled from 'styled-components'
import { FadeIn } from '../animations/FadeIn'
import { Body } from '../text/Text'
import Flex from '../containers/Flex'
import { ShortDivider } from '../Dividers/Dividers'


const HeaderWrapper = styled(Flex)`
  grid-column: 2/3;
  grid-row: 1;
  margin: 3em 0 2em 0;
  width: 80%;
  color: ${props => props.color};
  text-align: left;
  @media(max-width: 1024px) {
    text-align: center;
    margin: 3em auto 2em auto;
    grid-column: 1;
    grid-row: 1;
    align-items: center;
  }
  @media(max-width: 480px) {
    width: 100%;
    padding: 0 2em;
  }
`

const Heading = ({ h3, p, color, divider }) => {
  return (
    <>
        <HeaderWrapper color={color} alignStart contentCenter justifyCenter column noWrap>
          <FadeIn>
            <h3>{h3}</h3>
          </FadeIn>
          <ShortDivider bottom='0.8em' top='0.5em' color={divider} width='3.5em' />
          <Body color={color}>{p}</Body>
        </HeaderWrapper>
    </>
  )
}

export default Heading