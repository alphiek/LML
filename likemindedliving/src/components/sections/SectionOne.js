import React from 'react'
import { TextSection } from '../text/TextSection'
import { ContentCenter } from '../containers/Containers'
import { BlobOne } from '../shapes/Blobs'

const SectionOne = ({ copy }) => {
    return (
        <ContentCenter alignCenter >
            <TextSection copy={copy[1]} />
            <BlobOne color={copy[1].blob}/>
        </ContentCenter>
    )
}

export default SectionOne