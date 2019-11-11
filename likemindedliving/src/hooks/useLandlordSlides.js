import { useStaticQuery, graphql } from 'gatsby'

export const useLandlordSlides = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "landlordslides" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality: 90, maxWidth: 3840, maxHeight: 1106) {
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