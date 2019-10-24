import React from "react"
import PropTypes from "prop-types"

import IllustrationWrapper from "../Illustrations/IllustrationWrapper"
import MainTextWrapper from "../Text/MainTextWrapper"

import {
  MainSectionContainer,
  ReverseSectionWrapper,
} from "../Containers/Containers"

import housemateBG from "../../images/housemateBG.svg"
import { BGPattern } from "../ProcessCarousel/ProcessContainer"

const HouseMate = ({ copy }) => {
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
      <BGPattern src={housemateBG} />
    </MainSectionContainer>
  )
}

export default HouseMate

HouseMate.propTypes = {
  copy: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    blob: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    factColor: PropTypes.string.isRequired,
    fact: PropTypes.string.isRequired,
    h2: PropTypes.string.isRequired,
    link: PropTypes.objectOf(PropTypes.string).isRequired,
    p1: PropTypes.string.isRequired,
  }).isRequired,
}
