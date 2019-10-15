import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Flex from '../containers/Flex'
import { H2, Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import { FadeIn } from '../animations/FadeIn'

const TextContainer = styled(Flex)`
   height: 100%;
   @media (max-width: 1024px) {
       width: 80%;
       align-items: center;
   }
`

const H4 = styled.h4`
  margin-bottom: 1em;
  margin-top: 0.5em;
  color: ${props => props.color};
`
const CopyWrapper = styled.div`
    width: 100%;
    position: relative;
    margin: 2em 0;
    grid-area: copy;
    padding-right: 3em;
    @media (max-width: 1180px) {
    grid-area: right;
    padding-right: 0;
    margin: 1em 0 2em 0;
    }
`

export const SectionContent = ({ copy }) => {

    console.log(copy)

    let fact = Object.entries(copy.fact).map((item, index) => (
        <div key={index}>
            <FadeIn>
                <H4 color={copy.color} key={index}>{item[1].h4}</H4>
            </FadeIn>
            <Body color={copy.color}>{item[1].p}</Body>
        </div>
    ))

    return (
        <>
            <CopyWrapper>
                <TextContainer column justifyCenter contentCenter>
                    <FadeIn>
                        <H2 color={copy.color}>{copy.h2}</H2>
                    </FadeIn>
                    <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
                    {fact}
                </TextContainer>
            </CopyWrapper>
        </>
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

