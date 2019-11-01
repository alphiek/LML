import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import sideDrawerPtn from '../../images/sideDrawerPtn.png'
import housemateBG from '../../images/housemateBG.png'
import footerBG from '../../images/footerBG.png'
import testBG from '../../images/TestBG.png'
import stepsBG from '../../images/StepsBG.png'
import processLandlord from '../../images/landlordprocessBG.png'
import clientsBG from '../../images/clientsBG.png'

const Patterns = ({ name }) => {
  switch (name) {
    case 'sideDrawerPattern':
      return <SideDrawerPattern src={sideDrawerPtn} alt="background pattern" />
    case 'housematePattern':
      return <HouseMatePattern src={housemateBG} alt="background pattern" />
    case 'footerPattern':
      return <FooterPattern src={footerBG} alt="background pattern" />
    case 'testimonialPattern':
      return <TestimonialPattern src={testBG} alt="background pattern" />
    case 'processPattern':
      return <ProcessPattern src={stepsBG} alt="background pattern" />
    case 'processLandlord':
      return <LandlordPattern src={processLandlord} alt="background pattern" />
    case 'clients':
      return <ClientsPattern src={clientsBG} alt="background pattern" />
    default:
  }
}

export default Patterns

Patterns.propTypes = {
  name: PropTypes.string.isRequired,
}

const SideDrawerPattern = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  object-fit: cover;
  object-position: 50% 50%;
`

const HouseMatePattern = styled.img`
  position: absolute;
  width: 1920px;
  min-width: 1920px;
  top: -40px;
  @media (max-width: 1180px) {
    min-width: 2800px;
  }
  @media (max-width: 768px) {
    min-width: 2850px;
  }
  @media (max-width: 480px) {
    min-width: 3000px;
  }
`

const FooterPattern = styled.img`
  position: absolute;
  min-width: 1920px;
  bottom: 0;
  left: 0;
`

const TestimonialPattern = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
`

export const ProcessPattern = styled.img`
  position: absolute;
  width: 1920px;
  min-width: 1920px;
  top: -40px;
  @media (max-width: 1180px) {
    min-width: 2600px;
    top: -110px;
  }
  @media (max-width: 480px) {
    min-width: 2800px;
    top: -160px;
  }
`

export const LandlordPattern = styled(ProcessPattern)`
  top: -100px;
  @media (max-width: 1180px) {
    top: -120px;
  }
  @media (max-width: 768px) {
    top: -150px;
  }
  @media (max-width: 480px) {
    top: -170px;
  }
`

export const ClientsPattern = styled(HouseMatePattern)`
  @media (max-width: 1180px) {
    margin-top: -40px;
  }
  @media (max-width: 768px) {
    margin-top: -80px;
  }
`
