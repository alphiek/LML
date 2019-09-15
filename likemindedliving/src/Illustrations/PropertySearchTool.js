import React from 'react'
import styled from 'styled-components'
import { BlobOne } from '../components/shapes/Blobs'
import london from '../images/London.svg'

const ImageWrapper = styled.img`
   position: absolute;
   width: 16em;
   max-width: 200%;
   z-index: 10;
   @media (max-width: 768px) {
     width: 45vw;
   }
   @media (max-width: 480px) {
     width: 65vw;
   }
`

const PropertySearchTool = ({ color }) => (
    <BlobOne 
      color={color}>    
    <ImageWrapper src={london} alt='Illustration of London' />
    </BlobOne>
)


export default PropertySearchTool