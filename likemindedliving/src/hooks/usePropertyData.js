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
                        ...GatsbyDatoCmsFluid
                      }
                      url
                    }
                    linkurl
                    title
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