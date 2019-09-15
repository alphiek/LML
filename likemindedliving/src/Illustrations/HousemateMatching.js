import React from 'react'
import { BlobThree } from '../components/shapes/Blobs'
import styled from 'styled-components'
import housemates from '../images/Housemates.svg'

export const ImageWrapper = styled.img`
   position: absolute;
   width: 17em;
   margin-left: -1em;
   max-width: 200%;
   z-index: 10;
   @media (max-width: 1024px) {
     margin-left: 0;
   }
   @media (max-width: 768px) {
     width: 45vw;
   }
   @media (max-width: 480px) {
     width: 65vw;
   }
`


const HousemateMatching = ({ color, rotate }) => (
    <BlobThree 
      color={color}
      rotate={rotate}>    
    <ImageWrapper src={housemates} alt='Illustration of happy housemates' />
    </BlobThree>
)


export default HousemateMatching