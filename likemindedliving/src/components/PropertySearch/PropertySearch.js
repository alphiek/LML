import React from "react"
import IllustrationWrapper from "../Illustrations/IllustrationWrapper"
import MainTextWrapper from "../Text/MainTextWrapper"
import { Spacer } from "../Containers/Containers"
import { propertySearchCopy } from "./propertySearchCopy"
import { SectionContainer, SectionWrapper } from "../Containers/Containers"

const PropertySearch = () => {
  return (
    <SectionContainer>
      <SectionWrapper style={{ zIndex: '1'}}>
        <IllustrationWrapper
          name="blobOne"
          fill={propertySearchCopy.blob}
          image="sectionOne"
          justify="flex-end"
        />
        <Spacer />
        <MainTextWrapper copy={propertySearchCopy} />
      </SectionWrapper>
    </SectionContainer>
  )
}

export default PropertySearch
