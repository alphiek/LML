import React from 'react'
import styled from 'styled-components'

import IdealChoiceImage from '../../Illustrations/IdealChoiceImage'
import { TextSection } from '../text/TextSection'

const IdealSection = styled.section`
 width: 100%;
 display: flex;
 background-color: ${props => props.bgColor};
 flex-direction: row;
 flex-wrap: nowrap;
 justify-content: center;
 align-items: center;
 padding: 1.5rem 0;
 @media (max-width: 1024px) {
     flex-direction: column;
 }
`

const IdealImage = styled.div`
  width: 33.3%;
  @media (max-width: 1024px) {
    width: 60%;
}
`

const IdealText = styled.div`
  width: 33.3%;
  @media (max-width: 1024px) {
    width: 60%;
}
`

const IdealChoice = ({ copy }) => {
    
    return (
        <IdealSection bgColor={copy.bgColor}>
            <IdealImage justifyCenter>
                <IdealChoiceImage color={copy.blob} />
            </IdealImage>
            <IdealText contentCenter column>
                <TextSection copy={copy} />
            </IdealText>
        </IdealSection>
    )
}

export default IdealChoice