import React from "react"
import styled from "styled-components"

import {
  SectionContainer,
  ReverseSectionWrapper,
} from "../Containers/Containers"
import Flex from "../Containers/Flex"
import Patterns from "../Patterns/Patterns"
import { H3, H2, Body } from "../Text/Text"
import Icons from "../Icons/Icons"
import { clientsCopy } from "./clientsCopy"
import clients from "../../images/clients.svg"
import top from '../../images/patterns/top.svg'
import bottom from '../../images/patterns/btm.svg'

const Clients = () => {
  const data = clientsCopy
  const content = data.fact.map((item, index) => (
    <Item key={index}>
      <H3 color="rgba(80, 62, 167, 0.8)">{item.h4}</H3>
      <Body>{item.p}</Body>
    </Item>
  ))

  return (
    <Section>
      <ReverseSectionWrapper>
        <ImageWrapper justifyCenter alignCenter contentCenter>
          <Image src={clients} alt='group of young professionals' />
        </ImageWrapper>
        <TextWrapper>
          <H2>{data.h2}</H2>
          <Icons name="dividerShort" fill={data.divider} />
          {content}
        </TextWrapper>
      </ReverseSectionWrapper>
      <Patterns name="processPattern" />
    </Section>
  )
}

export default Clients


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
const Section = styled(SectionContainer)`
  padding: 200px 0 200px;
  margin-top: -50px;
  position: relative;
  background: #f5f7f9;
  @media (max-width: 1180px) {
    padding: 200px 0 240px;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: url(${top});
    background-repeat: no-repeat;
    background-size: cover;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: url(${bottom});
    background-repeat: no-repeat;
    background-size: cover;
  }
`