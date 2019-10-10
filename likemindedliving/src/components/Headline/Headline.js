import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import H1SplitText from '../animations/H1SplitText'
import Flex from '../containers/Flex'
import { FadeIn } from '../animations/FadeIn'
import { LandingDivider } from '../Dividers/Dividers'


const HeadlineSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 350px;

`
const TextCenter = styled(Flex)`
  width: 50%;
    @media (max-width: 1460px) {
        width: 60%;
    }
    @media (max-width: 1180px) {
      width: 65%;
      margin-top: 1rem;
    }
    @media (max-width: 768px) {
      margin-top: 1.5rem;
      width: 78%;
    }
    @media (max-width: 480px) {
      width: 75%;
    }
`


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