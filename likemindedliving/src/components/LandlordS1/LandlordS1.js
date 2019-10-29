import React from "react"

import { landlordS1Copy } from "./landlordS1Copy"
import { H2, H3, Body } from "../Text/Text"
import { SectionContainer, Grid, Heading, Image, Item } from "./s1Styles"
import { SectionWrapper } from "../Containers/Containers"
import Icons from "../Icons/Icons"
import landlordOne from "../../images/LandlordOne.svg"

const LandlordS1 = () => {
  const data = landlordS1Copy
  const content = data.fact.map((item, index) => (
    <Item key={index}>
      <H3 color="rgba(80, 62, 167, 0.8)">{item.h4}</H3>
      <Body>{item.p}</Body>
    </Item>
  ))

  return (
    <SectionContainer>
      <SectionWrapper>
        <Grid>
          <Heading>
            <H2>{data.h2}</H2>
            <Icons name="dividerShort" fill={data.divider} />
          </Heading>
          {content}
          <Image
            src={landlordOne}
            alt="signpost illustration highlighting services"
          />
        </Grid>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default LandlordS1
