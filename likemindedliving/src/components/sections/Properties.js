import React from 'react'
import { FullWidthText } from '../text/TextSection'
import PageLink from '../../global/Links/PageLink'

const Properties = ({ copy }) => {
    return (
        <>
        <FullWidthText copy={copy[1]} />
        <div>This will be the property carousel</div>
        <PageLink link={copy[1].link} />
        </>
    )
}

export default Properties