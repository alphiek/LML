import React from 'react'
import { TextSection } from '../text/TextSection'

const Process = ({ copy }) => {
    return (
        <>
        <TextSection copy={copy[1]}/>
        <div>This will be the process carousel</div>
        </>
    )
}

export default Process