import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import IllustrationWrapper from "../Illustrations/IllustrationWrapper"
import { MainSectionContainer, SectionWrapper } from "../Containers/Containers"
import MainTextWrapper from "../Text/MainTextWrapper"

const Algorithm = ({ copy }) => {
  return (
    <MainSectionContainer>
      <AlgoSectionWrapper>
        <IllustrationWrapper
          name="blobThree"
          fill={copy.blob}
          image="sectionThree"
          justify='flex-end'
        />
        <Spacer/>
        <MainTextWrapper copy={copy} />
      </AlgoSectionWrapper>
    </MainSectionContainer>
  )
}

export default Algorithm



Algorithm.propTypes = {
  copy: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    fact: PropTypes.string.isRequired,
    fact1: PropTypes.string.isRequired,
    factColor: PropTypes.string.isRequired,
    h2: PropTypes.string.isRequired,
    link: PropTypes.objectOf(PropTypes.string).isRequired,
    p1: PropTypes.string.isRequired,
  }).isRequired,
}


const Spacer = styled.div`
  @media (max-width: 1180px) {
    width: 100%;
    height: 90px;
  }
`

const AlgoSectionWrapper = styled(SectionWrapper)`
  margin-top: 40px;
`