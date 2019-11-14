import styled from 'styled-components'
import { MainSectionContainer } from '../Containers/Containers'
import curve from '../../images/patterns/curve.svg'

export const SectionContainer = styled(MainSectionContainer)`
   z-index: 3;
   background-color: white;
  @media (max-width: 1180px) {
    padding: 0 0 50px;
    margin-bottom: -60px;
  }
  @media (max-width: 660px) {
    margin-bottom: -120px;
  }
  &:before {
    content: '';
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    height: 80px;
    background-image: url(${curve});
    background-repeat: no-repeat;
    background-size: cover;
  }

`

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 30px 1fr 80px;
  @media (max-width: 1180px) {
    width: 60%;
    margin-top: 60px;
    grid-template-rows: auto;
    grid-template-columns: 100%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`

export const Heading = styled.div`
  grid-row: 1;
  grid-column: 1;
  @media (max-width: 1180px) {
    padding-top: 16px;
    grid-row: 2;
    grid-column: 1;
  }
`
export const Image = styled.img`
  grid-row: 1 / 3;
  grid-column: 2;
  position: relative;
  height: 250px;
  @media (max-width: 1180px) {
    grid-row: 1;
    grid-column: 1;
    margin: 0 auto;
    top: 0;
    height: 250px;
  }
`

export const Item = styled.div`
  padding: 1rem 1rem 1rem 0;
  position: relative;
  @media (max-width: 1180px) {
    padding: 0;
  }
  &:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
    margin-top: 50px;
    @media (max-width: 1180px) {
      margin-top: 0;
      grid-row: 3;
      grid-column: 1;
    }
  }
  &:nth-child(3) {
    grid-column: 3;
    grid-row: 2;
    margin-top: 50px;
    @media (max-width: 1180px) {
      margin-top: 0;
      grid-row: 4;
      grid-column: 1;
    }
  }
  &:nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 3;
    margin-left: 174px;
    @media (max-width: 1180px) {
      top: 0;
      margin-left: 0;
      grid-row: 5;
      grid-column: 1;
    }
  }
`
