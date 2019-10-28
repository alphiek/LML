import React from "react"
import Helmet from "react-helmet"
import Redirect404 from "../components/Redirect404/Redirect404"

const NotFoundPage = () => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Error Not Found</title>
      <meta name="description" content="404 Page"></meta>
    </Helmet>
    <Redirect404 page="404" />
  </>
)

export default NotFoundPage
