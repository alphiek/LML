import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  margin: 0 20%;
  grid-template-columns: 100%;
  grid-template-areas: 
   'copy';
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
