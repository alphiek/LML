import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import sideDrawerPtn from '../../images/patterns/sideDrawerPtn.png'
import footerBG from '../../images/patterns/footerBG.png'
import testBG from '../../images/patterns/TestBG.png'
import stepsBG from '../../images/patterns/StepsBG.png'

const Patterns = ({ name }) => {
  switch (name) {
    case 'sideDrawerPattern':
      return <LazyLoadComponent><SideDrawerPattern src={sideDrawerPtn} alt="background pattern" /></LazyLoadComponent>
    case 'footerPattern':
      return <LazyLoadComponent><FullwidthPattern src={footerBG} alt="background pattern" /></LazyLoadComponent>
    case 'testimonialPattern':
      return <LazyLoadComponent><TestimonialPattern src={testBG} alt="background pattern" /></LazyLoadComponent>
    case 'processPattern':
      return <LazyLoadComponent><ProcessPattern src={stepsBG} alt="background pattern" /></LazyLoadComponent>
    default:
  }
}

export default Patterns

Patterns.propTypes = {
  name: PropTypes.string.isRequired,
}

const Pattern = styled.img`
  position: absolute;
  bottom: 0;
`

const FullwidthPattern = styled(Pattern)`
  width: 100%;
  left: 0;
  height: 40%;
  object-fit: cover;
  object-position: 50% 50%;
`

const SideDrawerPattern = styled(FullwidthPattern)`
  height: 100%;
`

const TestimonialPattern = styled(FullwidthPattern)`
  height: 80%;
`

export const ProcessPattern = styled(Pattern)`
  right: 0;
`
