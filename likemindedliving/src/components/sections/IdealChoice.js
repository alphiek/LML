import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import {
  MainSectionContainer,
  ReverseSectionWrapper,
} from "../Containers/Containers"
import IllustrationWrapper from "../Illustrations/IllustrationWrapper"
import MainTextWrapper from "../Text/MainTextWrapper"


const IdealChoice = ({ copy }) => {
  return (
    <SectionContainer bgColor={copy.bgColor}>
      <ReverseSectionWrapper>
        <IllustrationWrapper
          name="blobFour"
          fill={copy.blob}
          image="sectionFour"
          justify='flex-start'
        />
        <Spacer />
        <MainTextWrapper copy={copy} />
      </ReverseSectionWrapper>
    </SectionContainer>
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
