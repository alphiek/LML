import React from 'react'
import PropTypes from 'prop-types'

import { MainSectionContainer, ReverseSectionWrapper, Wrapper } from '../containers/Containers'
import IdealChoiceImage from '../../Illustrations/IdealChoiceImage'
import { TextSection } from '../text/TextSection'


const IdealChoice = ({ copy }) => {

    return (
        <MainSectionContainer bgColor={copy.bgColor}>
            <ReverseSectionWrapper>
                <Wrapper>
                    <IdealChoiceImage color={copy.blob} />
                </Wrapper>
                <Wrapper>
                    <TextSection copy={copy} />
                </Wrapper>
            </ReverseSectionWrapper>
        </MainSectionContainer>
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