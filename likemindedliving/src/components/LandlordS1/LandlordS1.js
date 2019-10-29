import React from "react"
import styled from "styled-components"
import { landlordS1Copy } from "./landlordS1Copy"
import Section from "../PageLayout/Section"
import { H2, H4, LandlordP } from "../Text/Text"
import Icons from "../Icons/Icons"
import landlordOne from "../../images/LandlordOne.svg"

const LandlordS1 = () => {
  const data = landlordS1Copy
  const content = data.fact.map((item, index) => (
    <>
      <H4 key={index}>{item.h4}</H4>
      <LandlordP>{item.p}</LandlordP>
    </>
  ))

  return (
    <Section>
      <ImageWrapper>
        <Image
          src={landlordOne}
          alt="signpost illustration highlighting services"
        />
      </ImageWrapper>
      <TextWrapper>
        <H2>{data.h2}</H2>
        <Icons name="dividerShort" fill={data.divider} />
        {content}
      </TextWrapper>
    </Section>
  )
}

export default LandlordS1

const TextWrapper = styled.div`
  width: 65%;
`
const ImageWrapper = styled.div`
  width: 35%;
`
const Image = styled.img`
  height: 70%;
`
