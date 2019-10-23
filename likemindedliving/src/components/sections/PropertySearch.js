import React from "react"
import PropTypes from "prop-types"

import { TextSection } from "../text/TextSection"
import ModalControl from "../Modal/ModalControl"
import IllustrationWrapper from '../Illustrations/IllustrationWrapper'

import {
  SectionContainer,
  SectionWrapper,
  Wrapper,
} from "../containers/Containers"

const PropertySearch = ({ copy }) => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <IllustrationWrapper name='blobOne' fill={copy.blob} image="sectionOne" />
        <Wrapper>
          <TextSection copy={copy}>
            <ModalControl link={copy.link} />
          </TextSection>
        </Wrapper>
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
