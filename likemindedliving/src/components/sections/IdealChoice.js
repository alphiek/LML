import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IdealChoiceSection, ReverseSectionWrapper, Wrapper } from '../containers/Containers'
import IdealChoiceImage from '../../Illustrations/IdealChoiceImage'
import { TextSection } from '../text/TextSection'

const Spacer = styled.div`
  height: 50px;
  @media (max-width: 1180px) {
    &:nth-child(4) {
       display: none;
    }
  }  
`


const IdealChoice = ({ copy }) => {

    return (
        <IdealChoiceSection bgColor={copy.bgColor}>
            <Spacer />
            <ReverseSectionWrapper>                
                <Wrapper>
                    <IdealChoiceImage color={copy.blob} />
                </Wrapper>
                <Spacer />
                <Wrapper>
                    <TextSection copy={copy} />
                </Wrapper>
            </ReverseSectionWrapper>
            <Spacer />
        </IdealChoiceSection>
    )
}

export default IdealChoice

IdealChoice.propTypes = {
    copy: PropTypes.shape({
        bgColor: PropTypes.string.isRequired,
        blob: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        divider: PropTypes.string.isRequired,
        h2: PropTypes.string.isRequired,
        p1: PropTypes.string.isRequired,
        p2: PropTypes.string.isRequired
    }).isRequired
}