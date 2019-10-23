import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H2, Body } from '../Text/Text'
import { MainSectionContainer } from '../Containers/Containers'
import Icons from '../Icons/Icons'
import { FadeIn } from '../Animations/FadeIn'

const LandlordSectionWrapper = styled.div`
   width: 950px;
   display: flex;
   flex-direction: column;
   @media (max-width: 1180px) {
       width: 80vw;
   }
`

const FactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 1180px) {
        width: 80vw;
        justify-content: center;
        align-items: center;
    }
`

const FactWrapper = styled.div`
    width: 15rem;
    @media (max-width: 1180px){
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const H4 = styled.h4`
  margin-bottom: 1em;
  margin-top: 0.5em;
  letter-spacing: 0.5px;
  color: ${props => props.color};
`

const TextContainer = styled.div`
  @media (max-width: 1180px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`

export const SectionContent = ({ copy }) => {

    let fact = Object.entries(copy.fact).map((item, index) => (
        <FactWrapper key={index}>
            <FadeIn>
                <H4 color={copy.color} key={index}>{item[1].h4}</H4>
            </FadeIn>
            <Body color={copy.color}>{item[1].p}</Body>
        </FactWrapper>
    ))

    return (
        <MainSectionContainer bgColor={copy.bgColor}>
            <LandlordSectionWrapper>
                <div></div>
                <TextContainer>
                        <FadeIn>
                            <H2 color={copy.color}>{copy.h2}</H2>
                        </FadeIn>
                        <Icons name='dividerShort' fill={copy.divider} />
                        <FactContainer>
                            {fact}
                        </FactContainer>
                </TextContainer>
            </LandlordSectionWrapper>
        </MainSectionContainer>
    )
}

SectionContent.propTypes = {
    copy: PropTypes.shape({
        bgColor: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        divider: PropTypes.string.isRequired,
        fact: PropTypes.objectOf(PropTypes.object).isRequired,
        h2: PropTypes.string.isRequired
    }).isRequired
}

