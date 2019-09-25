import React from 'react'
import styled from 'styled-components'
import { BlobOne } from '../components/shapes/Blobs'
import london from '../images/London.svg'

const ImageWrapper = styled.img`
   position: absolute;
   width: 20rem;
   max-width: 200%;
   z-index: 10;
`

const PropertySearchTool = ({ color }) => (
    <BlobOne 
      color={color}>    
    <ImageWrapper src={london} alt='Illustration of London' />
    </BlobOne>
)


export default PropertySearchTool