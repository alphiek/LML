import React from 'react'
import { FullWidthText } from '../text/TextSection'
import PageLink from '../../global/Links/PageLink'

const Blogs = ({ copy }) => {
    return (
        <>
        <FullWidthText copy={copy[1]} />
        <div>This will be blog carousel</div>
        <PageLink link={copy[1].link} />
        </>
    )
}

export default Blogs