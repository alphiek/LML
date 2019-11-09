import styled from "styled-components"
import Flex from "../Containers/Flex"

export const H1 = styled.h1`
  color: ${props => props.color || '#4B4A68'};
  width: 800px;
`

export const HeadlineSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor || '#fff'};
`

export const TextCenter = styled(Flex)`
  margin: 80px 0;
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
    width: 75%;
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
