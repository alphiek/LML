import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Headline from "../Headline/Headline"

const DisplayLanding = ({ name }) => {
  const [isLoaded, setLoaded] = useState(false)

  let content

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!isLoaded) {
    content = <div></div>
  } else {
    content = (
      <>
        <Headline name={name} />
      </>
    )
  }

  return <LandingWrapper>{content}</LandingWrapper>
}

export default DisplayLanding

DisplayLanding.propTypes = {
  name: PropTypes.string.isRequired,
}

const LandingWrapper = styled.div`
  width: 100%;
`
