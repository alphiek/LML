import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'


const Image = styled(Flex)`
  grid-area: image;
  font-size: 0.5em;
`

const SlideImages = ({ slide }) => {
    let slideImage;

    if (slide === '1') {
        slideImage = <Image justifyCenter contentCenter>This is the first image</Image>
    } else if (slide === '2') {
        slideImage = <Image justifyCenter contentCenter>This is the second image</Image>
    } else if (slide === '3') {
        slideImage = <Image justifyCenter contentCenter>This is the third image</Image>
    } else if (slide === '4') {
        slideImage = <Image justifyCenter contentCenter>This is the fourth image</Image>
    } else if (slide === '5') {
        slideImage = <Image justifyCenter contentCenter>This is the fifth image</Image>
    } else if (slide === '6') {
        slideImage = <Image justifyCenter contentCenter>This is the sixth image</Image>
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