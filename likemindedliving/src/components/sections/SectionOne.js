import React from 'react'
import { TextSection } from '../text/TextSection'

const SectionOne = ({ copy }) => {
    return (
        <TextSection copy={copy[1]}/>
    )
}

export default SectionOne