import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import H1SplitText from './H1SplitText'
import {
  HeadlineSectionContainer,
  HeadlineTextCenter,
  DividerLong,
  H1Opaque
} from './headlineStyles'
import { FadeIn } from '../Animations/FadeIn'
import { headlineCopy } from './headlineCopy'
import ModalControl from '../Modal/ModalControl'

const HeadlineSection = ({ name }) => {
  const [isLoaded, setLoaded] = useState(false)
  const data = headlineCopy[name]
  let content

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!isLoaded) {
    content = <div><H1Opaque>{data.h1}</H1Opaque ></div>
  } else {
    content = (
      <>
        <HeadlineSectionContainer>
          <HeadlineTextCenter justifyCenter alignCenter column>
            <H1SplitText h1={data.h1} />
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
              <p className="title-sub-text">{data.p1}</p>
            </FadeIn>
            <ModalControl link={data.link} width="18rem" />
          </HeadlineTextCenter>
        </HeadlineSectionContainer>
      </>
    )
  }

  return <>{content}</>
}

export default HeadlineSection

HeadlineSection.propTypes = {
  name: PropTypes.string.isRequired,
}


