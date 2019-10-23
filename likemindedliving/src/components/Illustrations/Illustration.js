import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import london from "../../images/London.svg"
import housemates from "../../images/Housemates.svg"
import algorithm from "../../images/algorithm.svg"
import idealchoice from "../../images/IdealChoice.svg"

const Illustration = ({ name }) => {
  switch (name) {
    case "sectionOne":
      return <Image src={london} alt="Illustration of London" />
    case "sectionTwo":
      return <Image src={housemates} alt="Illustration of happy housemates" />
    case "sectionThree":
      return (
        <Image src={algorithm} alt="Illustration of a computer with houses" />
      )
    case "sectionFour":
      return <Image src={idealchoice} alt="Illustration of happy housemates" />
    default:
  }
}

export default Illustration

Illustration.propTypes = {
  name: PropTypes.string.isRequired,
}

const Image = styled.img`
  position: absolute;
  width: 20rem;
  max-width: 200%;
  z-index: 10;
  @media (max-width: 1180px) {
    width: 18rem;
  }
  @media (max-width: 480px) {
    width: 16rem;
  }
`
