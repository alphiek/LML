import styled from "styled-components"
import { MainSectionContainer } from "../Containers/Containers"

export const SectionContainer = styled(MainSectionContainer)`
@media (max-width: 1180px) {
  padding: 0;
}
`

export const Grid = styled.div`
width: 100%;
height: 100%;
display: grid;
position: relative;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 30px 1fr 30px;
@media (max-width: 1180px) {
  width: 60%;
  grid-template-rows: auto;
  grid-template-columns: 100%;
  top: -50px;
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
height: 391px;
top: -160px;
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
  top: -47px;
  margin-left: 174px;
  @media (max-width: 1180px) {
    top: 0;
    margin-left: 0;
    grid-row: 5;
    grid-column: 1;
  }
}
`
