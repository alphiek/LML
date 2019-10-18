import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { TestimonialImageWrapper } from '../../components/Testimonial/TestimonialCard'

export const TestimonialOne = () => (
    <StaticQuery query={graphql`
    query {
        testimonialOne: file(relativePath: { eq: "main/TestPlaceholderOne.png"}) {
            childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid_noBase64
              }
            }
        }
    }
`}
render={data => {
    const imageData = data.testimonialOne.childImageSharp.fluid
    return (
           <TestimonialImageWrapper fluid={imageData}/>    
    )
}}
/>
)