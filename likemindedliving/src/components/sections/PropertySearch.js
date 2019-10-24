import React from "react"
import PropTypes from "prop-types"

import IllustrationWrapper from "../Illustrations/IllustrationWrapper"
import MainTextWrapper from "../Text/MainTextWrapper"
import { SectionContainer, SectionWrapper, Spacer } from "../Containers/Containers"

const PropertySearch = ({ copy }) => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <IllustrationWrapper
          name="blobOne"
          fill={copy.blob}
          image="sectionOne"
          justify='flex-end'
        />
        <Spacer />
        <MainTextWrapper copy={copy} />
      </SectionWrapper>
    </SectionContainer>
  )
}

export default PropertySearch

PropertySearch.propTypes = {
  copy: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    blob: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    h2: PropTypes.string.isRequired,
    link: PropTypes.objectOf(PropTypes.string).isRequired,
    p1: PropTypes.string.isRequired,
  }).isRequired,
}
