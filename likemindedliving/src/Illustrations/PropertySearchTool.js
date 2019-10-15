import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import { BlobOne } from '../components/shapes/Blobs'
import london from '../images/London.svg'

const ImageWrapper = styled.img`
   position: absolute;
   width: 20rem;
   max-width: 200%;
   z-index: 10;
   @media (max-width: 1180px) {
     width: 18rem;
   }
   @media (max-width: 480px) {
     width: 16rem;
   }
`

const PropertySearchTool = ({ color }) => (
  <BlobOne
    color={color}>
    <ImageWrapper src={london} alt='Illustration of London' />
  </BlobOne>
)


export default PropertySearchTool

PropertySearchTool.propTypes = {
  color: Proptypes.string.isRequired
}