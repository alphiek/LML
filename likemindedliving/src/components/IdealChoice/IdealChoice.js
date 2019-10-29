import React from "react"
import styled from "styled-components"
import {
  MainSectionContainer,
  ReverseSectionWrapper,
} from "../Containers/Containers"
import IllustrationWrapper from "../Illustrations/IllustrationWrapper"
import MainTextWrapper from "../Text/MainTextWrapper"
import { idealChoiceCopy } from "./idealChoiceCopy"

const IdealChoice = () => {
  const copy = idealChoiceCopy
  return (
    <SectionContainer bgColor={copy.bgColor}>
      <ReverseSectionWrapper>
        <IllustrationWrapper
          name="blobFour"
          fill={copy.blob}
          image="sectionFour"
          justify="flex-start"
        />
        <Spacer />
        <MainTextWrapper copy={copy} />
      </ReverseSectionWrapper>
    </SectionContainer>
  )
}

export default IdealChoice


const Spacer = styled.div`
  @media (max-width: 1180px) {
    height: 50px;
  }
`

const SectionContainer = styled(MainSectionContainer)`
  margin: 40px 0;
  @media (max-width: 1180px) {
    margin: 40px 0 0 0;
  }
`
