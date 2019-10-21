import React from 'react'
import PropTypes from 'prop-types'

import H1SplitText from '../animations/H1SplitText'
import {
  HeadlineSection,
  TextCenter
} from '../containers/Containers'
import { FadeIn } from '../animations/FadeIn'
import { LandingDivider } from '../Dividers/Dividers'

const Headline = ({ copy }) => {

  return (
    <HeadlineSection bgColor={copy.bgColor}>
      <TextCenter justifyCenter alignCenter>
        <H1SplitText h1={copy.h1} color={copy.color} />
        <LandingDivider color={copy.divider} />
        <FadeIn delay={300} >
          <p className={copy.class}>{copy.p1}</p>
        </FadeIn>
      </TextCenter>
    </HeadlineSection>
  )
}



export default Headline

Headline.propTypes = {
  copy: PropTypes.objectOf(PropTypes.string).isRequired
}