import styled from 'styled-components'
import Flex from '../Containers/Flex'

export const HeadlineSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65vh;
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 20;
  background-color: transparent;
  @media (max-width: 1180px) {
    height: 75vh;
  }
  @media (max-width: 960px) {
    height: 36rem;
  }
  @media (max-width: 480px) {
    height: 38rem;
    align-items: flex-start;
  }
`

export const HeadlineTextCenter = styled(Flex)`
  width: 50%;
  @media (max-width: 1460px) {
    width: 60%;
  }
  @media (max-width: 1180px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    margin: 40px 0;
    width: 78%;
  }
  @media (max-width: 480px) {
    width: 83%;
  }
`

export const DividerLong = styled.svg`
  width: 80%;
  stroke-width: 1%;
  height: 1em;
  @media (max-width: 1180px) {
    stroke-width: 2%;
  }
  @media (max-width: 480px) {
    stroke-width: 3%;
    height: 2em;
  }
`
