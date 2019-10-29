import React from "react"
import styled from "styled-components"

import {
  MainSectionContainer,
  ReverseSectionWrapper,
} from "../Containers/Containers"
import Patterns from "../Patterns/Patterns"
import { H3, H2, Body } from "../Text/Text"
import Icons from "../Icons/Icons"
import { clientsCopy } from "./clientsCopy"
import clients from '../../images/clients.svg'

const Clients = () => {
  const data = clientsCopy
  const content = data.fact.map((item, index) => (
    <Item key={index}>
      <H3 color="rgba(80, 62, 167, 0.8)">{item.h4}</H3>
      <Body>{item.p}</Body>
    </Item>
  ))

  return (
    <MainSectionContainer>
      <ReverseSectionWrapper>
        <ImageWrapper src={clients}/>
        <TextWrapper>
          <H2>{data.h2}</H2>
          <Icons name="dividerShort" fill={data.divider} />
          {content}
        </TextWrapper>
      </ReverseSectionWrapper>
      <Patterns name="housematePattern" />
    </MainSectionContainer>
  )
}

export default Clients

export const Item = styled.div``

export const ImageWrapper = styled.img`
  width: 50%;
`

export const TextWrapper = styled.div`
 width: 50%;
 `


