import React from "react"
import PropTypes from "prop-types"

import SlideContainer from "./SlideContainer"
import {
  MainSectionContainer,
  ReverseSectionWrapper,
  Wrapper,
  ProcessSubTextWrapper,
} from "../Containers/Containers"
import { FadeIn } from "../Animations/FadeIn"
import { Body } from "../Text/Text"
import Icons from "../Icons/Icons"
import Patterns from "../Patterns/Patterns"

const ProcessContainer = ({ copy }) => {
  return (
    <MainSectionContainer>
      <ReverseSectionWrapper>
        <Wrapper>
          <ProcessSubTextWrapper>
            <FadeIn>
              <h3>{copy.h3}</h3>
            </FadeIn>
            <Icons name="dividerShort" fill={copy.divider} />
            <Body color={copy.color}>{copy.p1}</Body>
          </ProcessSubTextWrapper>
        </Wrapper>
        <SlideContainer
          copy={copy.steps}
          link={copy.link}
          landlord={copy.landlords}
        />
      </ReverseSectionWrapper>
      <Patterns name="processPattern" />
    </MainSectionContainer>
  )
}

export default ProcessContainer

ProcessContainer.propTypes = {
  copy: PropTypes.shape({
    landlords: PropTypes.bool.isRequired,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    h3: PropTypes.string.isRequired,
    link: PropTypes.objectOf(PropTypes.string).isRequired,
    p1: PropTypes.string.isRequired,
    steps: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
}
