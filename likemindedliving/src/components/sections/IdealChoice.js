import React from 'react'

import { IdealImage, IdealText } from '../Grids/SectionSubGrid'
import IdealChoiceImage from '../../Illustrations/IdealChoiceImage'
import { TextSection } from '../text/TextSection'

const IdealChoice = ({ copy }) => {
    let data = copy[1]

    return (
        <>
            <IdealImage justifyCenter>
                <IdealChoiceImage color={data.blob} />
            </IdealImage>
            <IdealText contentCenter column>
                <TextSection copy={data} />
            </IdealText>
        </>
    )
}

export default IdealChoice