import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import ProcessImageWrapper from "./ProcessImageWrapper"

import step1 from "../../images/step1.svg"
import step2 from "../../images/Step2.svg"
import step3 from "../../images/Step3.svg"
import step4 from "../../images/Step4.svg"
import step5 from "../../images/Step5.svg"

const ImgBlock = styled.img`
  width: auto;
  height: 200px;
  @media (max-width: 1180px) {
    margin-top: 16px;
    width: 18rem;
  }
  @media (max-width: 480px) {
    width: 80vw;
  }
`

const TenantProcessIllustration = ({ slide }) => {
  switch (slide) {
    case 1:
      return (
        <ProcessImageWrapper>
          <ImgBlock src={step1} />
        </ProcessImageWrapper>
      )
    case 2:
      return (
        <ProcessImageWrapper>
          <ImgBlock src={step2} />
        </ProcessImageWrapper>
      )
    case 3:
      return (
        <ProcessImageWrapper>
          <ImgBlock src={step3} />
        </ProcessImageWrapper>
      )
    case 4:
      return (
        <ProcessImageWrapper>
          <ImgBlock src={step4} />
        </ProcessImageWrapper>
      )
    case 5:
      return (
        <ProcessImageWrapper>
          <ImgBlock src={step5} />
        </ProcessImageWrapper>
      )
    default:
  }
}

export default TenantProcessIllustration

TenantProcessIllustration.propTypes = {
  slide: PropTypes.number.isRequired,
}
