import styled from 'styled-components'
import Flex from '../containers/Flex'


export const ImageCell = styled(Flex)`
`

export const ImageDiv = styled(Flex)`
  width: 100%;
  height: auto;
  font-size: 0.8em;
`

export const ImgBlock = styled.img`
  max-width: 70%;
  width: 18em;
  @media (max-width: 1024px) {
    width: 60vw;
  }
  @media (max-width: 480px) {
    width: 80vw;
  }
`

