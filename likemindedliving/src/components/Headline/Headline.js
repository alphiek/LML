import React from "react"
import PropTypes from "prop-types"

import { HeadlineSection, TextCenter, DividerLong } from "./headlineStyles"
import H1SplitText from "./H1SplitText"
import { FadeIn } from "../Animations/FadeIn"
import { headlineCopy } from "./headlineCopy"

const Headline = ({ name }) => {
  const data = headlineCopy[name]

  return (
    <HeadlineSection bgColor={data.bgColor}>
      <TextCenter justifyCenter alignCenter>
        <H1SplitText h1={data.h1} color={data.color} />
        <DividerLong
          stroke={data.divider}
          fill="none"
          viewBox="0 0 987 8.9"
          strokeLinecap="round"
          strokeMiterlimit="10"
        >
          <path d="M3,3c98.1,0,98.1,2.9,196.2,2.9S297.3,3,395.4,3s98.1,2.9,196.2,2.9S689.7,3,787.8,3 S885.9,5.9,984,5.9" />
        </DividerLong>
        <FadeIn delay={300}>
          <p className={data.class}>{data.p1}</p>
        </FadeIn>
      </TextCenter>
    </HeadlineSection>
  )
}

export default Headline

Headline.propTypes = {
  name: PropTypes.string.isRequired,
}
