import React from "react"
import PropTypes from "prop-types"
import { processCopy } from "./processCopy"
import SlideContainer from "./SlideContainer"
import {
  MainSectionContainer,
  ReverseSectionWrapper,
  Wrapper,
  ProcessSubTextWrapper,
} from "../Containers/Containers"
import { FadeIn } from "../Animations/FadeIn"
import { H2, Body } from "../Text/Text"
import Icons from "../Icons/Icons"
import Patterns from "../Patterns/Patterns"

const ProcessContainer = ({ name }) => {
  const copy = processCopy[name]

  const pattern = name === 'landlord' ? 'processLandlord' : 'processPattern'

  return (
    <MainSectionContainer>
      <ReverseSectionWrapper>
        <Wrapper>
          <ProcessSubTextWrapper>
            <FadeIn>
              <H2>{copy.h3}</H2>
            </FadeIn>
            <Icons name="dividerShort" fill={copy.divider} />
            <Body color={copy.color}>{copy.p1}</Body>
          </ProcessSubTextWrapper>
        </Wrapper>
        <SlideContainer copy={copy.steps} link={copy.link} name={name} />
      </ReverseSectionWrapper>
      <Patterns name={pattern} />
    </MainSectionContainer>
  )
}

export default ProcessContainer

ProcessContainer.propTypes = {
  name: PropTypes.string.isRequired,
}
