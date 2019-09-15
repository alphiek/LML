import React from 'react'
import styled from 'styled-components'
import { BlobTwo } from '../components/shapes/Blobs'
import idealchoice from '../images/IdealChoice.svg'

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

const IdealChoiceImage = ({ color }) => (
    <BlobTwo
      color={color}>    
    <ImageWrapper src={idealchoice} alt='Illustration of happy housemates' />
    </BlobTwo>
)


export default IdealChoiceImage