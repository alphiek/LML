import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ModalControl from "../Modal/ModalControl"
import IllustrationWrapper from "../Illustrations/IllustrationWrapper"

import {
  MainSectionContainer,
  SectionWrapper,
  Wrapper,
} from "../Containers/Containers"
import { TextSection } from "../Text/TextSection"
import Flex from "../Containers/Flex"
import { FactBody } from "../Text/Text"

const AlgorithmContainer = styled(Flex)`
  margin-bottom: 1em;
  @media (max-width: 1180px) {
    justify-content: center;
    align-items: center;
  }
`
const Spacer = styled.div`
  @media (max-width: 1180px) {
    height: 40px;
  }
`

const Algorithm = ({ copy }) => {
  return (
    <MainSectionContainer>
      <SectionWrapper>
        <IllustrationWrapper name="blobThree" fill={copy.blob} image="sectionThree"/>
        <Wrapper>
          <TextSection copy={copy}>
            <AlgorithmContainer>
              <FactBody color={copy.factColor}>{copy.fact.one}</FactBody>
              <FactBody color={copy.factColor}>{copy.fact.two}</FactBody>
            </AlgorithmContainer>
            <ModalControl link={copy.link} />
          </TextSection>
        </Wrapper>
      </SectionWrapper>
    </MainSectionContainer>
  )
}

export default Algorithm

Algorithm.propTypes = {
  copy: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    fact: PropTypes.objectOf(PropTypes.string).isRequired,
    factColor: PropTypes.string.isRequired,
    h2: PropTypes.string.isRequired,
    link: PropTypes.objectOf(PropTypes.string).isRequired,
    p1: PropTypes.string.isRequired,
  }).isRequired,
}
