import React from 'react'
import { TextSection } from '../text/TextSection'
import { ContentCenter } from '../containers/Containers'
import { BlobTwo } from '../shapes/Blobs'

const SectionFour = ({ copy }) => {
    return (
        <ContentCenter alignCenter rowReverse >
            <TextSection copy={copy[1]} />
            <BlobTwo color={copy[1].blob}/>
        </ContentCenter>
    )
}

export default SectionFour