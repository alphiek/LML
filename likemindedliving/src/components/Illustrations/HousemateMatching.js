import React from 'react'
import Proptypes from 'prop-types'
import { BlobThree } from '../shapes/Blobs'
import styled from 'styled-components'
import housemates from '../../images/Housemates.svg'

const ImageWrapper = styled.img`
   position: absolute;
   width: 25rem;
   max-width: 200%;
   z-index: 10;
   @media (max-width: 1180px) {
     width: 20rem;
   }
   @media (max-width: 480px) {
     width: 18rem;
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

HousemateMatching.propTypes = {
  color: Proptypes.string.isRequired,
  rotate: Proptypes.string.isRequired
}