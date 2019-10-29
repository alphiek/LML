import React from "react"
import Section from "../PageLayout/Section"
import IllustrationWrapper from "../Illustrations/IllustrationWrapper"
import MainTextWrapper from "../Text/MainTextWrapper"
import { Spacer } from "../Containers/Containers"
import { propertySearchCopy } from "./propertySearchCopy"

const PropertySearch = () => {
  return (
    <Section>
      <IllustrationWrapper
        name="blobOne"
        fill={propertySearchCopy.blob}
        image="sectionOne"
        justify="flex-end"
      />
      <Spacer />
      <MainTextWrapper copy={propertySearchCopy} />
    </Section>
  )
}

export default PropertySearch
