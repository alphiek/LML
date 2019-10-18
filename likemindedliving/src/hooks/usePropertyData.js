import { useStaticQuery, graphql } from 'gatsby'

export const usePropertyData = () => {
    const { allDatoCmsProperty } = useStaticQuery(
        graphql`
        query properties {
            allDatoCmsProperty {
                edges {
                  node {
                    id
                    image {
                      alt
                      fluid {
                        base64
                      }
                      url
                    }
                    linkurl
                    location
                    price
                    shortdescription
                  }
                }
            }
        }        
        `
        )
return allDatoCmsProperty
}