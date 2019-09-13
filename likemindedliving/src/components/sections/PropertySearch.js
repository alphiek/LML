import React from 'react'
import styled from 'styled-components'

import { PropertySearchImage, PropertySearchText } from '../Grids/SectionSubGrid'
import PropertySearchTool from '../../Illustrations/PropertySearchTool'
import { FadeIn } from '../animations/FadeIn'
import { TextSection } from '../text/TextSection'
import PageLink from '../../global/Links/PageLink'


const SignUpFormWrapper = styled.div`
  width: 10em;
  padding-top: 1em;
  @media (max-width: 1024px) {
     width: 15em;
  }
  @media (max-width: 480px) {
      width: 12em;
  }
`

const PropertySearch = ({ copy }) => {
    let data = copy[1]

    return (
        <>
            <PropertySearchImage justifyCenter>
                <PropertySearchTool color={data.blob} />
            </PropertySearchImage>
            <PropertySearchText contentCenter column>
                <TextSection copy={data}>
                <FadeIn>
                    <SignUpFormWrapper>
                        <PageLink color='white' link={data.link} />
                    </SignUpFormWrapper>
                </FadeIn>
                </TextSection >
            </PropertySearchText>
        </>
    )
}

export default PropertySearch