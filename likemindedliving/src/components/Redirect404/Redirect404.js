import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Flex from '../Containers/Flex'
import blob404 from "../../images/404Blob.svg"
import ieRedirect from '../../images/IEredirectBlob.svg'

const Redirect404 = ({ page }) => {
  let redirect
  let title
  let blob

  if (page === "404") {
    blob = <Blob src={blob404} alt="background shape with question marks" />
    title = "404, The route you are looking for does not exist"
    redirect = <Link to="/">&#62;&#62; Back to Home &#60;&#60;</Link>
  } else {
    blob = <Blob src={ieRedirect} alt="background shape with exclamation marks" />
    title =
      "Internet Explorer is not supported, please update your browser to view this site"
    redirect = <a href='https://bestvpn.org/outdatedbrowser/en'>&#62;&#62; Click here for browser options &#60;&#60;</a>
  }
  return (
    <PageContainer>
      <ContentWrapper justifyAround alignCenter column>
        {blob}
        <h1>{title}</h1>
        {redirect}
      </ContentWrapper>
    </PageContainer>
  )
}

export default Redirect404
const PageContainer = styled(Flex)`
  width: 100%;
  height: 60vh;
  justify-content: center;
  align-items: center;
`

const ContentWrapper = styled(Flex)`
  height: 80%;
  width: 80%;
`

const Blob = styled.img`
  width: 300px;
  @media (max-width: 1180px) {
    justify-content: center;
  }
  @media (max-width: 480px) {
    width: 60vw;
  }
`
