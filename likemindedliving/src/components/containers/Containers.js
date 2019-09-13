import styled from 'styled-components'
import Flex from './Flex'

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

