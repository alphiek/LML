import React from "react"
import styled from "styled-components"
import { algorithmCopy } from "./algorithmCopy"
import IllustrationWrapper from "../Illustrations/IllustrationWrapper"
import { MainSectionContainer, SectionWrapper } from "../Containers/Containers"
import MainTextWrapper from "../Text/MainTextWrapper"

const Algorithm = () => {
  const copy = algorithmCopy
  return (
    <MainSectionContainer>
      <AlgoSectionWrapper>
        <IllustrationWrapper
          name="blobThree"
          fill={copy.blob}
          image="sectionThree"
          justify="flex-end"
        />
        <Spacer />
        <MainTextWrapper copy={copy} />
      </AlgoSectionWrapper>
    </MainSectionContainer>
  )
}

export default Algorithm

const Spacer = styled.div`
  @media (max-width: 1180px) {
    width: 100%;
    height: 90px;
  }
`

const AlgoSectionWrapper = styled(SectionWrapper)`
  margin-top: 40px;
`
