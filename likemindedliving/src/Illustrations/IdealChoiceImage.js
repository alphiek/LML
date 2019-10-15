import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import { BlobTwo } from '../components/shapes/Blobs'
import idealchoice from '../images/IdealChoice.svg'

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

const IdealChoiceImage = ({ color }) => (
  <BlobTwo
    color={color}>
    <ImageWrapper src={idealchoice} alt='Illustration of happy housemates' />
  </BlobTwo>
)


export default IdealChoiceImage

IdealChoiceImage.propTypes = {
  color: Proptypes.string.isRequired
}