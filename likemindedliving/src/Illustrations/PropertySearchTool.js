import React from 'react'
import { BlobOne } from '../components/shapes/Blobs'
import { ImageWrapper } from './Styles'
import london from '../images/London.svg'


const PropertySearchTool = ({ color }) => (
    <BlobOne 
      color={color}>    
    <ImageWrapper src={london} alt='Illustration of London' />
    </BlobOne>
)


export default PropertySearchTool