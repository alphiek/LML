import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'

const Grid = styled.div`
  display: grid;
  margin: 0 20%;
  grid-template-columns: 50% 50%;
  grid-template-areas: 
   'left right';
   @media (max-width: 1024px) {
    margin: 0 15%;
  }
  @media (max-width: 880px) {
  grid-template-columns: 100%;
  grid-template-areas: 
    'left'
    'right';
  padding: 0 2em;
  }
  @media (max-width: 768px) {
    margin: 0 7%;
  }
  @media (max-width: 480px) {
    margin: 0 6%;
  }
  @media (max-width: 330px) {
    margin: 0 2%;
  }
`

export const GridItem = styled.div`
   width: 100%;
   border: 1px solid green;
   grid-area: ${props => props.area};
`
export const ReverseItemRight = styled(Flex)`
   width: 100%;
   border: 1px solid black;
   grid-area: right;
   @media (max-width: 880px) {
   grid-area: left;
   }
`
export const ReverseItemLeft = styled.div`
    width: 100%;
    grid-area: left;
    padding-right: 3em;
    border: 1px solid red;
    @media (max-width: 880px) {
    grid-area: right;
    padding-right: 0;
    }
`

const SectionSubGrid = ({ children }) => {
    return (
        <Grid>{children}</Grid>
    )
}

export default SectionSubGrid
