import React from "react"
import styled from "styled-components"

import {
  MainSectionContainer,
  ReverseSectionWrapper,
} from "../Containers/Containers"
import Flex from "../Containers/Flex"
import Patterns from "../Patterns/Patterns"
import { H3, H2, Body } from "../Text/Text"
import Icons from "../Icons/Icons"
import { clientsCopy } from "./clientsCopy"
import clients from "../../images/clients.svg"

const Clients = () => {
  const data = clientsCopy
  const content = data.fact.map((item, index) => (
    <Item key={index}>
      <H3 color="rgba(80, 62, 167, 0.8)">{item.h4}</H3>
      <Body>{item.p}</Body>
    </Item>
  ))

  return (
    <MainSection>
      <ReverseSectionWrapper>
        <ImageWrapper justifyCenter alignCenter contentCenter>
          <Image src={clients} />
        </ImageWrapper>
        <TextWrapper>
          <H2>{data.h2}</H2>
          <Icons name="dividerShort" fill={data.divider} />
          {content}
        </TextWrapper>
      </ReverseSectionWrapper>
      <Patterns name="clients" />
    </MainSection>
  )
}

export default Clients


export const MainSection = styled(MainSectionContainer)`
@media (max-width: 480px) {
  padding: 25px 0 80px;
}
`

export const Item = styled.div``

export const Image = styled.img`
  width: 100%;
  @media (max-width: 1180px) {
    width: 18rem;
  }
`

export const ImageWrapper = styled(Flex)`
  width: 40%;
  margin-right: 10%;
  @media (max-width: 1180px) {
    margin: 0 0 40px 0;
  }
  @media (max-width: 480px) {
    width: 55%;
  }
`

export const TextWrapper = styled.div`
  width: 50%;
  @media (max-width: 1180px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`
