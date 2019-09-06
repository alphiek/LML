import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const TermsContainer = styled.ul`
   flex-direction: column;
`
const PdfLink = styled.a`
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-size: 0.45em;
  line-height: 120%;
  text-transform: uppercase;
`

const convertName = (name) => {
  if (name === 'Cookie-Policy-for-Like-Minded-Living') {
    return 'Cookie Policy'
  } else {
    return 'Terms of Use'
  }
}

const Terms = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
      <TermsContainer>
        {data.allFile.edges.map((file, index) => {
          return (
            <li key={`pdf-${index}`}>
              <PdfLink
                 href={file.node.publicURL}
                 aria-label={`Link to ${file.node.name}`}
                 target='blank'
                 rel='noopener noreferrer'
                 >
                {convertName(file.node.name)}
              </PdfLink>
            </li>
          )
        })}
        <li><PdfLink 
           href='https://www.iubenda.com/privacy-policy/79077073'
           aria-label='Link to Privacy Policy'
           target='blank'
           rel='noopener noreferrer'
           >Privacy Policy</PdfLink>
        </li>
      </TermsContainer>
  )
}
export default Terms