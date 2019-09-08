import React from 'react'
import styled from 'styled-components'
import { FadeIn } from '../animations/FadeIn'
import { Body } from '../text/Text'
import Flex from '../containers/Flex'


const Header = styled.div`
  grid-area: header;
  padding: 1.5em 9% 1.5em 9%;
  width: 70%;
  border-radius: 0.35em;
  background-color: rgba(75, 74, 104, 0.95);
  color: ${props => props.pColor};
  @media(max-width: 1024px) {
      width: 100%;
  }
`

const HeaderWrapper = styled(Flex)`
  height: 100%;
`

const Heading = ({ h3, p, color, pColor }) => {
    return (
        <Header color={color} pColor={pColor}>
        <HeaderWrapper alignCenter contentCenter>
          <FadeIn>
            <h3>{h3}</h3>
          </FadeIn>
          <Body color={pColor}>{p}</Body>
        </HeaderWrapper>
      </Header>
    )
}

export default Heading