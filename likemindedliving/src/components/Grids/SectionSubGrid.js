import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'

export const ReverseItemRight = styled(Flex)`
   width: 100%;
   position: relative;
   margin: 2em 0;
   grid-area: right;
   @media (max-width: 1024px) {
   grid-area: left;
   margin: 1em 0;
   }
`
export const ReverseItemLeft = styled.div`
    width: 100%;
    position: relative;
    margin: 2em 0;
    grid-area: left;
    padding-right: 3em;
    @media (max-width: 1024px) {
    grid-area: right;
    padding-right: 0;
    margin: 1em 0 2em 0;
    }
`

const Grid = styled.div`
  display: grid;
  margin: 0 20%;
  grid-template-columns: 50% 50%;
  grid-template-areas: 
   'left right';
   & ${ReverseItemLeft}: first-child {
     margin: 0 0 2em 0;
   }
   @media (max-width: 1024px) {
    margin: 0 15%;
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
    margin: 0 2%;
  }
  @media (max-width: 330px) {
    margin: 0 2%;
  }
`

export const GridItem = styled.div`
   position: relative;
   width: 100%;
   margin: 2em 0;
   grid-area: ${props => props.area};
   @media(max-width: 1024px) {
    margin: 1em 0 2em 0;
   }
`

const SectionSubGrid = ({ children }) => {
    return (
        <Grid>{children}</Grid>
    )
}

export default SectionSubGrid
