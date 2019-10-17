import React from 'react'
import PropTypes from 'prop-types'
import SlideContainer from './SlideContainer'
import { MainSectionContainer, ReverseSectionWrapper, Wrapper } from '../containers/Containers'
import { FadeIn } from '../animations/FadeIn'
import { Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'

const ProcessContainer = ({ copy }) => {

  return (
    <MainSectionContainer bgColor={copy.bgColor}>
      <ReverseSectionWrapper>
        <Wrapper>
            <FadeIn>
              <h3>{copy.h3}</h3>
            </FadeIn>
            <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
            <Body color={copy.color}>{copy.p1}</Body>
        </Wrapper>
        <SlideContainer copy={copy.steps} link={copy.link} landlord={copy.landlords}/>
      </ReverseSectionWrapper>
    </MainSectionContainer>
  )
}

export default ProcessContainer

ProcessContainer.propTypes = {
  copy: PropTypes.shape({
    landlords: PropTypes.bool.isRequired,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    h3: PropTypes.string.isRequired,
    link: PropTypes.objectOf(PropTypes.string).isRequired,
    p1: PropTypes.string.isRequired,
    p2: PropTypes.string.isRequired,
    steps: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired
}

