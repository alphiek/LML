import styled from 'styled-components'
import Flex from './Flex'
import { colors } from '../../global/colors'
import Img from 'gatsby-image'

// 1. Nav

// 2. Sections
// a. Section Global Containers
// b. Landing Page
// c. Process Carousel
// d. Properties
// e. Testimonials
// f. PressReel
// g. Blogs


// 3. Section 1 - 4 / Flex Children
// 4. Image and Icon Containers


// 1. Nav Containers

export const DesktopMenuContainer = styled.ul`
  display: flex;
  width: 35em;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

export const TabletMenuContainer = styled(DesktopMenuContainer)`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

export const FixedContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  padding: 1em;
  background-color: ${colors.mint};
`

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5em;
    padding-right: 1vw;
    padding-left: 1em;
    position: fixed;
    top: 0;
    z-index: 600;
    `


// 2. Section Containers

// a. Section Global Containers

export const Section = styled.section`
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const ContentCenter = styled(Flex)`
  width: 60%;
  @media (max-width: 991px) {
    width: 65%;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    width: 70%;
  }
  @media (max-width: 479px) {
    width: 80%;
  }
`
export const FullWidthContainer = styled(Flex)`
  position: relative;
  padding-top: 4em;
  padding-bottom: 4em;
  width: 60%;
  @media (max-width: 991px) {
    width: 65%;
  }
  @media (max-width: 767px) {
    width: 70%;
  }
  @media (max-width: 479px) {
    width: 80%;
  }
`
export const LinkWrapperRight = styled.div`
  width: auto;
  text-align: right;
`
// b. Landing

export const LandingCenter = styled(Flex)`
   width: 50%;
   margin-top: 3em;
   @media (max-width: 991px) {
    width: 65%;
    }
    @media (max-width: 767px) {
    width: 70%;
    }
    @media (max-width: 479px) {
    width: 80%;
  }
`

// c. Process Carousel

export const CarouselContainer = styled(Flex)`
  width: 100%;
  height: 15em;
`
// d. Properties






// e. Testimonials 

export const TestimonialContainer = styled.div`
  margin-left: 5%;
  width: 95%;
`
export const TestimonialHeadingContainer = styled.div`
  background-color: ${colors.lightPeach};
  padding: 3em 0 3em 15%;
  width: 100%;
`
export const TestimonialHeadingWrapper = styled.div`
  width: 20%;
  `

export const TestimonialCardContainer = styled(Flex)`
  position: relative;
  margin-left: 5em;
  margin-bottom: 2em;
`

export const TestimonialCardWrapper = styled.div`
   width: 18%;
   margin: -5em 1em 0 1em;
`

export const TextWrapper = styled.div`
  padding: 1em 2em 2em 1em;
`

// f. Press Reel






// g. Blogs







// 3. Flex Children

export const FlexChild = styled.div`
  padding: 1em;
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const BlobFlex = styled(Flex)`
  position: relative;
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
`

// 4. Image and Icon Containers

export const ImageContainer = styled.div`
  position: absolute;
  width: 70%;
  height: auto;
  z-index: 3;
  bottom: 2em;
  background: transparent;
`

export const IconContainer = styled(Flex)`
  width: 5em;
  margin-top: 0.8em;
  margin-bottom: 0.8em;
`

export const AlgorithmContainer = styled(Flex)`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`

export const AlgorithmFactWrapper = styled(Flex)`
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  width: 100%;
`

export const TestimonialImageWrapper = styled(Img)`
  width: 95%;
`