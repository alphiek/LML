import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import blob404 from '../images/404Blob.svg'
import Flex from '../components/Containers/Flex'

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Error Not Found</title>
        <meta name="description" content="404 Page"></meta>
      </Helmet>
      <PageContainer>
        <ContentWrapper justifyAround alignCenter column>
          <Blob src={blob404} alt="background shape with question marks" />
          <h1 style={{ color: 'rgba(75, 74, 104, 0.95)'}}>404, The route you are looking for does not exist</h1>
          <Link to="/">&#62;&#62; Back to Home &#60;&#60;</Link>
        </ContentWrapper>
      </PageContainer>
    </>
  )
}

export default NotFoundPage

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
