import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import ProcessImageWrapper from "./ProcessImageWrapper"

import step1 from '../../images/Step1L.svg'
import step2 from '../../images/Step2L.svg'
import step3 from '../../images/Step3L.svg'
import step4 from '../../images/Step4L.svg'
import step5 from '../../images/Step5.svg'

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

const LandlordProcessIllustration = ({ slide }) => {
  switch (slide) {
    case 1:
      return (
        <ProcessImageWrapper>
          <ImgBlock src={step1} alt='Image of an open laptop, diary, pen and a cup of coffee'/>
        </ProcessImageWrapper>
      )
    case 2:
      return (
        <ProcessImageWrapper>
          <ImgBlock src={step2} alt='Image of a property floor plan'/>
        </ProcessImageWrapper>
      )
    case 3:
      return (
        <ProcessImageWrapper>
          <ImgBlock src={step3} alt='Image of cards showing different contact method icons' />
        </ProcessImageWrapper>
      )
    case 4:
      return (
        <ProcessImageWrapper>
          <ImgBlock src={step4} alt='Image of a key, signature and checklist'/>
        </ProcessImageWrapper>
      )
    case 5:
      return (
        <ProcessImageWrapper>
          <ImgBlock src={step5} alt='Image of boxes and a pot plant' />
        </ProcessImageWrapper>
      )
    default:
  }
}

export default LandlordProcessIllustration

LandlordProcessIllustration.propTypes = {
  slide: PropTypes.number.isRequired,
}
