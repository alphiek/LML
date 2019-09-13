import React from 'react'

import ImageWrapper from './ImageWrapper'

const SlideImages = ({ slide }) => {
    let slideImage;

    if (slide === '1') {
        slideImage =
            <ImageWrapper>One</ImageWrapper>
    } else if (slide === '2') {
        slideImage =
            <ImageWrapper>Two</ImageWrapper>
    } else if (slide === '3') {
        slideImage =
        <ImageWrapper>Three</ImageWrapper>
    } else if (slide === '4') {
        slideImage =
        <ImageWrapper>Four</ImageWrapper>
    } else if (slide === '5') {
        slideImage =
        <ImageWrapper>Five</ImageWrapper>
    } else {
        return <div>Something is wrong here</div>
    }

    return (
        <>
            {slideImage}
        </>
    )
}

export default SlideImages