import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetaData = () => {
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              address {
                house
                street
                town
                city
                postal
                tel
                email
              }
              social {
                  fb
                  insta
              }
            }
          }
        }
      `
    )
    return site.siteMetadata
  }