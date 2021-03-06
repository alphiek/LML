import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { processCopy } from './processCopy'
import SlideContainer from './SlideContainer'
import {
  SectionContainer,
  ReverseSectionWrapper,
  Wrapper,
  ProcessSubTextWrapper,
} from '../Containers/Containers'
import { FadeIn } from '../Animations/FadeIn'
import { H2, Body } from '../Text/Text'
import Icons from '../Icons/Icons'
import Patterns from '../Patterns/Patterns'
import top from '../../images/patterns/stepsBGtop.svg'
import bottom from '../../images/patterns/stepsBGbtm.svg'

const ProcessContainer = ({ name }) => {
  const copy = processCopy[name]

  return (
    <Section>
      <ReverseSectionWrapper>
        <Wrapper>
          <ProcessSubTextWrapper>
            <FadeIn>
              <H2>{copy.h3}</H2>
            </FadeIn>
            <Icons name="dividerShort" fill={copy.divider} />
            <Body color={copy.color}>{copy.p1}</Body>
          </ProcessSubTextWrapper>
        </Wrapper>
        <SlideContainer copy={copy.steps} link={copy.link} name={name} />
      </ReverseSectionWrapper>
      <Patterns name="processPattern" />
    </Section>
  )
}

export default ProcessContainer

ProcessContainer.propTypes = {
  name: PropTypes.string.isRequired,
}

const Section = styled(SectionContainer)`
  padding: 210px 0 100px;
  margin-top: -30px;
  margin-bottom: 60px;
  position: relative;
  background: #f5f7f9;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 175px;
    background-image: url(${top});
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
      height: 214px;
    }
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: url(${bottom});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (max-width: 1180px) {
    margin-top: -20px;
    padding: 220px 0 230px;
    margin-bottom: -50px;
  }
  @media (max-width: 660px) {
    margin-bottom: 0;
  }
`
