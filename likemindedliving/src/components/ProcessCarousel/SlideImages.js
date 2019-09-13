import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import step1 from '../../images/step1.svg'
import step2 from '../../images/Step2.svg'
import step3 from '../../images/Step3.svg'
import step4 from '../../images/Step4.svg'
import step5 from '../../images/Step5.svg'
import step6 from '../../images/Step6.svg'

const ImageCell = styled(Flex)`
  grid-area: image;
`

const ImageWrapper = styled(Flex)`
  width: 100%;
  height: 12em;
  font-size: 0.8em;
`

const ImgBlock = styled.img`
  max-width: 30em;
  width: 18em;
`

const SlideImages = ({ slide }) => {
    let slideImage;

    if (slide === '1') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter>
                    <ImgBlock src={step1} />
              </ImageWrapper>
            </ImageCell>
    } else if (slide === '2') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter>
                <ImgBlock src={step2}/>
                </ImageWrapper>
            </ImageCell>
    } else if (slide === '3') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter>
                <ImgBlock src={step3}/>
                </ImageWrapper>
            </ImageCell>
    } else if (slide === '4') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter>
                   <ImgBlock src={step4}/>
                </ImageWrapper>
            </ImageCell>
    } else if (slide === '5') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter>
                   <ImgBlock src={step5}/>
                </ImageWrapper>
            </ImageCell>
    } else if (slide === '6') {
        slideImage =
            <ImageCell justifyCenter contentCenter>
                <ImageWrapper justifyCenter contentCenter>
                   <ImgBlock src={step6}/>
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