import React from 'react'
import { BlobThree } from '../components/shapes/Blobs'
import { ImageWrapper } from './Styles'
import housemates from '../images/Housemates.svg'


const HousemateMatching = ({ color, rotate }) => (
    <BlobThree 
      color={color}
      rotate={rotate}>    
    <ImageWrapper src={housemates} alt='Illustration of happy housemates' />
    </BlobThree>
)


export default HousemateMatching