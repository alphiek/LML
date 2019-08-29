import React from 'react'
import { TextSection } from '../text/TextSection'
import { ContentCenter } from '../containers/Containers'
import { BlobOne } from '../shapes/Blobs'
import { Body } from '../text/Text'
import HousemateIcons from '../../images/HousemateIcons'

const SectionTwo = ({ copy }) => {
    return (
        <ContentCenter alignCenter rowReverse >
            <TextSection copy={copy[1]}>
                <HousemateIcons />
                <Body color={copy[1].color}>This is the section for the facts and icons</Body>
            </TextSection>
            <BlobOne color={copy[1].blob} rotate='rotate(139deg)'/>
        </ContentCenter>

    )
}

export default SectionTwo