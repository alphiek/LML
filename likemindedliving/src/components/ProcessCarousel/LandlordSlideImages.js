import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ImageWrapper from './ImageWrapper'

import step4L from '../../images/Step4L.svg'
import step5 from '../../images/Step5.svg'


const ImgBlock = styled.img`
  max-width: 70%;
  width: 18em;
  @media (max-width: 1180px) {
    width: 18rem;
  }
  @media (max-width: 480px) {
    width: 80vw;
  }
`

const SlideImages = ({ slide }) => {
    let slideImage;

    if (slide === 1) {
        slideImage =
            <ImageWrapper><ImgBlock />One</ImageWrapper>
    } else if (slide === 2) {
        slideImage =
            <ImageWrapper><ImgBlock />Two</ImageWrapper>
    } else if (slide === 3) {
        slideImage =
            <ImageWrapper><ImgBlock />Three</ImageWrapper>
    } else if (slide === 4) {
        slideImage =
            <ImageWrapper><ImgBlock src={step4L} /></ImageWrapper>
    } else if (slide === 5) {
        slideImage =
            <ImageWrapper><ImgBlock src={step5} /></ImageWrapper>
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

SlideImages.propTypes = {
    slide: PropTypes.number.isRequired,
}