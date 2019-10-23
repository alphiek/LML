import React from 'react'
import PropTypes from 'prop-types'

import H1SplitText from '../Animations/H1SplitText'
import {
  HeadlineSection,
  TextCenter
} from '../Containers/Containers'
import { FadeIn } from '../Animations/FadeIn'
import Icons from '../Icons/Icons'

const Headline = ({ copy }) => {

  return (
    <HeadlineSection bgColor={copy.bgColor}>
      <TextCenter justifyCenter alignCenter>
        <H1SplitText h1={copy.h1} color={copy.color} />
        <Icons name='dividerLong' fill={copy.divider} />
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