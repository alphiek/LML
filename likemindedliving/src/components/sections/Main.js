import React from 'react'
import SectionTemplate from './SectionTemplate';

const Main = ({ data }) => {
    let copy = data
    let sectionData = Object.entries(copy)

    return (
        sectionData.map((item, index) => <SectionTemplate key={index} copy={item}/>)
    )
}

export default Main