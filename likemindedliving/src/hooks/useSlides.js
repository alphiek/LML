import { useStaticQuery, graphql } from "gatsby"

export const useSlides = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "slides" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )
  return allFile
}
