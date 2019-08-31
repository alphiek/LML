import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { ImageContainer } from '../../components/containers/Containers'

export const WhereToLive = () => (
    <StaticQuery query={graphql`
    query {
        sectionOneImg: file(relativePath: { eq: "main/SectionOneImg.png"}) {
            childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid_noBase64
              }
            }
        }
    }
`}
render={data => {
    const imageData = data.sectionOneImg.childImageSharp.fluid
    return (
        <ImageContainer>
           <Img fluid={imageData}/>
        </ImageContainer>        
    )
}}
/>
)