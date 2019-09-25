import React from 'react'
import styled from 'styled-components'

import PropertySearchTool from '../../Illustrations/PropertySearchTool'
import { FadeIn } from '../animations/FadeIn'
import { TextSection } from '../text/TextSection'
import PageLink from '../../global/Links/PageLink'


const PropertySection = styled.section`
 width: 100%;
 display: flex;
 flex-direction: row-reverse;
 flex-wrap: nowrap;
 justify-content: center;
 align-items: center;
 padding: 1.5rem 0;
 @media (max-width: 1024px) {
     flex-direction: column;
 }
`

const PropertySearchImage = styled.div`
  width: 33.3%;
  @media (max-width: 1024px) {
    width: 60%;
}
`

const PropertySearchText = styled.div`
  width: 33.3%;
  @media (max-width: 1024px) {
    width: 60%;
}
`

const SignUpFormWrapper = styled.div`
  width: 60%;
  padding-top: 1rem;
  @media (max-width: 1024px) {
     width: auto;
  }
  @media (max-width: 480px) {
      width: auto;
  }
`

const PropertySearch = ({ copy }) => {
    return (
        <PropertySection>
            <PropertySearchImage>
                <PropertySearchTool color={copy.blob} />
            </PropertySearchImage>
            <PropertySearchText>
                <TextSection copy={copy}>
                    <FadeIn>
                        <SignUpFormWrapper>
                            <PageLink link={copy.link} />
                        </SignUpFormWrapper>
                    </FadeIn>
                </TextSection >
            </PropertySearchText>
        </PropertySection>
    )
}

export default PropertySearch