import React from 'react'
import { TextSection } from '../text/TextSection'
import { ContentCenter } from '../containers/Containers'
import { BlobOne } from '../shapes/Blobs'
import { WhereToLive } from '../../images/queries/WhereToLive'

const SectionOne = ({ copy }) => {
    return (
        <ContentCenter alignCenter >
            <TextSection copy={copy[1]} />
            <BlobOne color={copy[1].blob}>
                {
                    copy[1].tenants && <WhereToLive />
                }
            </BlobOne>
        </ContentCenter>
    )
}

export default SectionOne