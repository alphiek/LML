import React from 'react'

import SlideContainer from './SlideContainer'
import { SectionContainer, ReverseSectionWrapper, Wrapper } from '../containers/Containers'
import { FadeIn } from '../animations/FadeIn'
import { Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'

const ProcessContainer = ({ copy }) => {

  return (
    <SectionContainer bgColor={copy.bgColor}>
      <ReverseSectionWrapper>
        <Wrapper>
            <FadeIn>
              <h3>{copy.h3}</h3>
            </FadeIn>
            <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
            <Body color={copy.color}>{copy.p1}</Body>
        </Wrapper>
        <SlideContainer copy={copy.steps} link={copy.link} />
      </ReverseSectionWrapper>
    </SectionContainer>
  )
}

export default ProcessContainer