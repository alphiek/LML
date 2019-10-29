import React from "react"
import { housemateCopy } from './housemateCopy'
import IllustrationWrapper from "../Illustrations/IllustrationWrapper"
import MainTextWrapper from "../Text/MainTextWrapper"
import Patterns from "../Patterns/Patterns"

import {
  MainSectionContainer,
  ReverseSectionWrapper,
} from "../Containers/Containers"

const Housemate = () => {
  
  const copy = housemateCopy
  return (
    <MainSectionContainer bgColor={copy.bgColor}>
      <ReverseSectionWrapper>
        <IllustrationWrapper
          name="blobTwo"
          justify="flex-start"
          fill={copy.blob}
          image="sectionTwo"
        />
        <MainTextWrapper copy={copy} />
      </ReverseSectionWrapper>
      <Patterns name="housematePattern" />
    </MainSectionContainer>
  )
}

export default Housemate

