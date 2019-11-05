import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const DisplayLanding = ({ children }) => {
  const [isLoaded, setLoaded] = useState(false)

  let content

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!isLoaded) {
    content = <div></div>
  } else {
    content = <>{children}</>
  }

  return <LandingWrapper>{content}</LandingWrapper>
}

export default DisplayLanding

DisplayLanding.propTypes = {
  children: PropTypes.node.isRequired,
}

const LandingWrapper = styled.div`
  width: 100%;
  min-height: 800px;
`
