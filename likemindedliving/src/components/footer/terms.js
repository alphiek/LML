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
  transition: 0.5s;
  : hover {
    opacity: 0.5;
  }
  @media (max-width: 1180px) {
    font-size: 0.5em;
  }
  @media (max-width: 768px) {
    font-size: 0.55em
  }
  @media (max-width: 480px) {
    font-size: 0.6em;
  }
`

const PDFLinkWrapper = styled.li`
    @media (max-width: 1180px) {
      margin: 0.2em 0;
    }
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
          <PDFLinkWrapper key={`pdf-${index}`}>
            <PdfLink
              href={file.node.publicURL}
              aria-label={`Link to ${file.node.name}`}
              target='blank'
              rel='noopener noreferrer'
            >
              {convertName(file.node.name)}
            </PdfLink>
          </PDFLinkWrapper>
        )
      })}
      <PDFLinkWrapper
      ><PdfLink
        href='https://www.iubenda.com/privacy-policy/79077073'
        aria-label='Link to Privacy Policy'
        target='blank'
        rel='noopener noreferrer'
      >Privacy Policy</PdfLink>
      </PDFLinkWrapper>
    </TermsContainer>
  )
}
export default Terms