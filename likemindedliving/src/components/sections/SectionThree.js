import React from 'react'
import { TextSection } from '../text/TextSection' 
import { Body } from '../text/Text'

const SectionThree = ({ copy }) => {
    return (
        <TextSection copy={copy[1]}>
            <Body color={copy[1].color}>This is the section for the facts and icons</Body>
        </TextSection>
    )
}

export default SectionThree