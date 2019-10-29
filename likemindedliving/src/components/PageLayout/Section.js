import React from "react"
import PropTypes from "prop-types"
import { SectionContainer, SectionWrapper } from "../Containers/Containers"

const Section = ({ children }) => (
  <SectionContainer>
    <SectionWrapper>{children}</SectionWrapper>
  </SectionContainer>
)

export default Section

Section.propTypes = {
  children: PropTypes.node.isRequired,
}
