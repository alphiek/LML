import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

export const Slide = styled(Img)`
  width: 100%;
  height: 65vh;
  @media (max-width: 1366px) {
    height: 73vh;
  }
  @media (max-width: 1180px) {
    height: 80vh;
  }
  @media (max-width: 1024px) {
    height: 82vh;
  }
  @media (max-width: 960px) {
    height: 40rem;
  }
  @media (max-width: 480px) {
    height: 42rem;
  }
`

export const SlideWrapper = styled.div`
  overflow: hidden;
`
