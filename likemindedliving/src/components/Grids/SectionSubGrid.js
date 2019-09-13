import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'


const ItemTemplate = styled(Flex)`
   width: 100%;
   position: relative;
`

const ItemSmallTop = styled(ItemTemplate)`
  @media (max-width: 1024px) {
    grid-area: left;
    margin: 1em 0;
    }
`
const ItemSmallBottom = styled(ItemTemplate)`
  @media (max-width: 1024px) {
    grid-area: right;
    padding-right: 0;
    text-align: center;
    margin: 1em 0 2em 0;
  }
`

export const PropertySearchImage = styled(ItemSmallTop)`
   margin: 2em 0;
   grid-area: right;  
`

export const PropertySearchText = styled(ItemSmallBottom)`
    grid-area: left;
    padding-right: 3em;
`

export const HouseMateImage = styled(ItemTemplate)`
    grid-area: left;
`

export const HouseMateText = styled(ItemTemplate)`
    grid-area: right;
`

export const AlgorithmText = styled(ItemSmallTop)`
    grid-area: left;
`

export const AlgorithmImage = styled(ItemSmallBottom)`
    grid-area: right;
`

export const IdealImage = styled(ItemTemplate)`
    grid-area: left;
`

export const IdealText = styled(ItemTemplate)`
    grid-area: right;
`


const Grid = styled.div`
  display: grid;
  margin: 0 20%;
  grid-template-columns: 50% 50%;
  grid-template-areas: 
   'left right';
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



const SectionSubGrid = ({ children }) => {
    return (
        <Grid>{children}</Grid>
    )
}

export default SectionSubGrid
