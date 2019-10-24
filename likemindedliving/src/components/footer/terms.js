import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FadeIn } from "../Animations/FadeIn"
import styled from "styled-components"

const TermsContainer = styled.ul`
  flex-direction: column;
  margin-top: 20px;
`
const PdfLink = styled.a`
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  transition: 0.5s;
  :hover {
    opacity: 0.5;
  }
`

const PDFLinkWrapper = styled.li`
  @media (max-width: 1180px) {
    margin: 15px 0;
  }
`

const convertName = name => {
  if (name === "Cookie-Policy-for-Like-Minded-Living") {
    return "Cookie Policy"
  } else {
    return "Terms of Use"
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
            <FadeIn>
              <PdfLink
                href={file.node.publicURL}
                aria-label={`Link to ${file.node.name}`}
                target="blank"
                rel="noopener noreferrer"
              >
                {convertName(file.node.name)}
              </PdfLink>
            </FadeIn>
          </PDFLinkWrapper>
        )
      })}
      <PDFLinkWrapper>
        <FadeIn>
          <PdfLink
            href="https://www.iubenda.com/privacy-policy/79077073"
            aria-label="Link to Privacy Policy"
            target="blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </PdfLink>
        </FadeIn>
      </PDFLinkWrapper>
    </TermsContainer>
  )
}
export default Terms
