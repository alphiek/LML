import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TextCenter, DividerLong } from '../Headline/headlineStyles'
import H1SplitText from '../Headline/H1SplitText'
import { FadeIn } from '../Animations/FadeIn'
import { headlineCopy } from '../Headline/headlineCopy'
import ModalControl from "../Modal/ModalControl"

const copy = {
  link: {
    color: `white`,
    bgColor: `#E91E63`,
    bgColorHover: `#673AB7`,
    name: `Start your search now`,
    url: `https://likemindedliving.outgrow.us/likemindedliving-45`,
  },
}

const HeadlineTwo = ({ name }) => {
  const data = headlineCopy[name]

  return (
    <HeadlineTwoSection>
      <TextCenter justifyCenter alignCenter>
        <H1SplitText h1={data.h1} color="white" />
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
          <P2>{data.p1}</P2>
        </FadeIn>
        <Spacer />
        <ModalControl link={copy.link} width='100%' />
      </TextCenter>
    </HeadlineTwoSection>
  )
}

export default HeadlineTwo

HeadlineTwo.propTypes = {
  name: PropTypes.string.isRequired,
}

export const HeadlineTwoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65vh;
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 20;
  background-color: transparent;
`

export const P2 = styled.p`
  color: white;
  font-size: 1rem;
  text-align: center;
  margin: 0.8rem auto 0;
  width: 70%;
  line-height: 145%;
  @media (max-width: 480px) {
    width: 85%;
  }
`

const Spacer = styled.div`
  height: 2rem;
  width: 100%;
`
