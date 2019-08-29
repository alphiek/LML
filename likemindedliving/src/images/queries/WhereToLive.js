import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { ImageContainer } from '../../components/containers/Containers'

export const WhereToLive = () => (
    <StaticQuery query={graphql`
    query {
        whereToLive: file(relativePath: { eq: "main/WhereToLive.png"}) {
            childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid_withWebp
              }
            }
        }
    }
`}
render={data => {
    const imageData = data.whereToLive.childImageSharp.fluid
    return (
        <ImageContainer>
           <Img fluid={imageData}/>
        </ImageContainer>        
    )
}}
/>
)