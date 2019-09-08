import React from 'react'
import styled from 'styled-components'
import { colors } from '../../global/colors'
import Flex from '../containers/Flex'

const ImageCell = styled(Flex)`
  grid-area: image;
`

const ImageWrapper = styled(Flex)`
  width: 100%;
  height: 12em;
  font-size: 0.8em;
  border: 2px solid ${props => props.color};
`


const SlideImages = ({ slide }) => {
    let slideImage;

    if (slide === '1') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter color={colors.mint}>
                    Img One
              </ImageWrapper>
            </ImageCell>
    } else if (slide === '2') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter color={colors.lilac}>
                    Img Two
                </ImageWrapper>
            </ImageCell>
    } else if (slide === '3') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter color={colors.grey}>
                    Img Three
                </ImageWrapper>
            </ImageCell>
    } else if (slide === '4') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter color={colors.lightPeach}>
                    Img Four
                </ImageWrapper>
            </ImageCell>
    } else if (slide === '5') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter color={colors.mint}>
                    Img Five
                </ImageWrapper>
            </ImageCell>
    } else if (slide === '6') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter color={colors.lilac}>
                    Img Six
                </ImageWrapper>
            </ImageCell>
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