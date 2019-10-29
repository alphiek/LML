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
    content = (
      <div style={{ opacity: '0' }}>
        <h1>Search rental properties everywhere. Save on rent. Discover your dream home.</h1>
        <p>Our Property Search Tool searches 1000's of listings across all major sites to find your ideal home, customers can save up to £1000's per year on rent.</p>
        <h2>Property Search Tool</h2>
        <p>Submit your details and let our tool find your perfect property. Fill in our form and kick-start your property search today, 
        we’ll be in touch with property details.</p>
      </div>
    )
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
  min-height: 80vh;
`
