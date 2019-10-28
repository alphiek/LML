import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Headline from "../Headline/Headline"
import PropertySearch from "../Sections/PropertySearch"

const DisplayLanding = ({ headlineCopy, propertyCopy }) => {
  const [isLoaded, setLoaded] = useState(false)

  let content

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!isLoaded) {
    content = null
  } else {
    content = (
      <>
        <Headline copy={headlineCopy} />
        <PropertySearch copy={propertyCopy} />
      </>
    )
  }

  return <LandingWrapper>{content}</LandingWrapper>
}

export default DisplayLanding

Headline.propTypes = {
  headlinecopy: PropTypes.objectOf(PropTypes.string).isRequired,
  propertyCopy: PropTypes.objectOf(PropTypes.string).isRequired,
}

const LandingWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`
