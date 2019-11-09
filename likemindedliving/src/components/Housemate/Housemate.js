import React from "react"
import { housemateCopy } from './housemateCopy'
import styled from 'styled-components'
import IllustrationWrapper from "../Illustrations/IllustrationWrapper"
import MainTextWrapper from "../Text/MainTextWrapper"
import Patterns from "../Patterns/Patterns"
import top from '../../images/patterns/top.svg'
import bottom from '../../images/patterns/btm.svg'

import {
  SectionContainer,
  ReverseSectionWrapper,
} from "../Containers/Containers"

const Housemate = () => {
  
  const copy = housemateCopy
  return (
    <Section>
      <ReverseSectionWrapper>
        <IllustrationWrapper
          name="blobTwo"
          justify="flex-start"
          fill={copy.blob}
          image="sectionTwo"
        />
        <MainTextWrapper copy={copy} />
      </ReverseSectionWrapper>
      <Patterns name="processPattern" />
    </Section>
  )
}

export default Housemate


const Section = styled(SectionContainer)`
  padding: 200px 0 220px;
  position: relative;
  background: #f5f7f9;
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
  @media (max-width: 1180px) {
    margin-top: -20px;
    padding: 220px 0 230px;
    margin-bottom: -80px;
  }
  @media (max-width: 660px) {
    margin-top: -80px;
  }
`

