import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SlideContainer from './SlideContainer'
import { MainSectionContainer, ReverseSectionWrapper, Wrapper, ProcessSubTextWrapper } from '../containers/Containers'
import { FadeIn } from '../animations/FadeIn'
import { Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import bg from '../../images/StepsBG.svg'
import memphis from '../../images/StepsMemphis.svg'


export const BGPattern = styled.img`
position: absolute;
width: 1920px;
min-width: 1920px;
top: -40px;
@media (max-width: 1180px) {
 min-width: 2500px;
 top: -125px;
}
`

export const MemphisPattern = styled(BGPattern)`
   top: -150px;
   z-index: 1;
`



const ProcessContainer = ({ copy }) => {

  return (
    <MainSectionContainer>
      <ReverseSectionWrapper>
        <Wrapper>
          <ProcessSubTextWrapper>
            <FadeIn>
              <h3>{copy.h3}</h3>
            </FadeIn>
            <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
            <Body color={copy.color}>{copy.p1}</Body>
          </ProcessSubTextWrapper>
        </Wrapper>
        <SlideContainer copy={copy.steps} link={copy.link} landlord={copy.landlords} />
      </ReverseSectionWrapper>
      <MemphisPattern src={memphis} />
      <BGPattern src={bg} />
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
    steps: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired
}

