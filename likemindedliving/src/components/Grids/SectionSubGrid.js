import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  padding: 0 20%;
  grid-template-columns: 50% 50%;
  grid-template-areas: 
   'left right';
  @media (max-width: 768px) {
  grid-template-columns: 100%;
  grid-template-areas: 
    'left'
    'right';
  padding: 0 2em;
`

export const GridItem = styled.div`
   width: 100%;
   grid-area: ${props => props.area};
`
export const ReverseItemRight = styled.div`
   width: 100%;
   grid-area: right;
   @media (max-width: 768px) {
   grid-area: left;   
`
export const ReverseItemLeft = styled.div`
    width: 100%;
    grid-area: left;
    @media (max-width: 768px) {
    grid-area: right;
`

const SectionSubGrid = ({ children }) => {
    return (
        <Grid>{children}</Grid>
    )
}

export default SectionSubGrid
