import React from "react"
import styled from "styled-components"
import { paymentsCopy } from "./paymentsCopy"
import { H2, H3, CenterBody } from "../Text/Text"
import { FullSection } from "../Containers/Containers"
import Icons from "../Icons/Icons"
import Flex from "../Containers/Flex"

const Contracts = () => {
  const data = paymentsCopy
  const content = data.fact.map((item, index) => (
    <Item alignCenter contentStart justifyCenter column key={index}>
      <Icons name={item.icon} />
      <H3 color="rgba(80, 62, 167, 0.8)">{item.h4}</H3>
      <CenterBody>{item.p}</CenterBody>
    </Item>
  ))

  return (
    <FullSection>
      <CenterContainer justifyCenter alignCenter column>
        <H2 color={data.color}>{data.h2}</H2>
        <Icons name="dividerShort" fill={data.divider} />
        <FactWrapper justifyBetween alignStart >
          {content}
        </FactWrapper>
      </CenterContainer>
    </FullSection>
  )
}

export default Contracts

export const CenterContainer = styled(Flex)`
  width: 950px;
  margin: 60px 0 80px;
  @media (max-width: 1180px) {
    margin: 0 0 60px;
    width: 60%;
  }
  @media (max-width: 660px) {
    width: 80%;
    margin: 50px 0 40px;
  }
`

export const FactWrapper = styled(Flex)`
  @media (max-width: 1180px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const Item = styled(Flex)`
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 1180px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
