import React from "react"
import PropTypes from "prop-types"
import {
  IdealChoiceSection,
  ReverseSectionWrapper,
} from "../Containers/Containers"
import IllustrationWrapper from "../Illustrations/IllustrationWrapper"
import MainTextWrapper from "../Text/MainTextWrapper"


const IdealChoice = ({ copy }) => {
  return (
    <IdealChoiceSection bgColor={copy.bgColor}>
      <ReverseSectionWrapper>
        <IllustrationWrapper
          name="blobFour"
          fill={copy.blob}
          image="sectionFour"
        />
        <MainTextWrapper copy={copy} />
      </ReverseSectionWrapper>
    </IdealChoiceSection>
  )
}

export default IdealChoice

IdealChoice.propTypes = {
  copy: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    blob: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    h2: PropTypes.string.isRequired,
    p1: PropTypes.string.isRequired,
    p2: PropTypes.string.isRequired,
  }).isRequired,
}
