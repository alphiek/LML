import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { TestimonialImageWrapper } from '../../components/containers/Containers'

export const TestimonialTwo = () => (
    <StaticQuery query={graphql`
    query {
        testimonialTwo: file(relativePath: { eq: "main/TestPlaceholderTwo.png"}) {
            childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid_noBase64
              }
            }
        }
    }
`}
render={data => {
    const imageData = data.testimonialTwo.childImageSharp.fluid
    return (
           <TestimonialImageWrapper fluid={imageData}/> 
    )
}}
/>
)