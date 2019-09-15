import { useStaticQuery, graphql } from "gatsby"

export const useBlogData = () => {
    const { blogs } = useStaticQuery(
      graphql`
        query BlogData {
          blogs {
            categories {
               nodes {
                  name
                  posts {
                    nodes {
                      excerpt(format: RENDERED)
                      date
                      title
                      slug
                      id
                      featuredImage {
                        altText
                        mediaType
                        sizes(size: FULLPAGE_THUMB_SIZE)
                        sourceUrl
                      }
                    }
                  }
              }
            }
          }
        }
      `
    )
    return blogs.categories.nodes
}