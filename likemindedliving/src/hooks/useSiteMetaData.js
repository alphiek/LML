import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetaData = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
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
              twitter
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
