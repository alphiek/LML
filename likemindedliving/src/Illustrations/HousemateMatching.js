import React from 'react'
import { BlobThree } from '../components/shapes/Blobs'
import styled from 'styled-components'
import housemates from '../images/Housemates.svg'

const ImageWrapper = styled.img`
   position: absolute;
   width: 25rem;
   max-width: 200%;
   z-index: 10;
   @media (max-width: 1180px) {
     width: 18rem;
   }
   @media (max-width: 480px) {
     width: 16rem;
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