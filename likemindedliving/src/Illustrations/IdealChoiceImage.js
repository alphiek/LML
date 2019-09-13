import React from 'react'
import { BlobTwo } from '../components/shapes/Blobs'
import { ImageWrapper } from './Styles'
import idealchoice from '../images/IdealChoice.svg'


const IdealChoiceImage = ({ color }) => (
    <BlobTwo
      color={color}>    
    <ImageWrapper src={idealchoice} alt='Illustration of happy housemates' />
    </BlobTwo>
)


export default IdealChoiceImage