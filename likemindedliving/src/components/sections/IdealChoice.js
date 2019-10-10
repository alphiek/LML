import React from 'react'

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