import styled from 'styled-components'
import Flex from './Flex'
import { colors } from '../../global/colors'

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



// c. Process Carousel

export const CarouselContainer = styled(Flex)`
  width: 100%;
  height: 15em;
`

export const CarouselHeadingContainer = styled.div`
  background-color: ${colors.lightPeach};
  padding: 2em 0 2em 15%;
  width: 90%;
`

export const ProcessLinkRight = styled.div`
  margin-bottom: 2em;
`

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

