import React from "react"
import styled from "styled-components"
import sideDrawerPtn from "../../images/sideDrawerPtn.svg"

const SideDrawerPattern = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  object-fit: cover;
  object-position: 50% 50%;
`

const Patterns = ({ name }) => {
  switch (name) {
    case "sideDrawerPattern":
      return <SideDrawerPattern src={sideDrawerPtn} alt="background pattern" />
    default:
  }
}

export default Patterns
