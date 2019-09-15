import React from 'react'
import styled from 'styled-components'
import { GradBlob } from '../components/shapes/Blobs'
import algorithm from '../images/Algorithm.svg'



const ImageWrapper = styled.img`
   position: absolute;
   width: 13.5em;
   max-width: 200%;
   z-index: 10;
   @media (max-width: 768px) {
     width: 45vw;
   }
   @media (max-width: 480px) {
     width: 65vw;
   }
`


const AlgorithmIllustration = () => (
    <GradBlob>   
    <ImageWrapper src={algorithm} alt='Illustration of a computer with houses' />
    </GradBlob>
)


export default AlgorithmIllustration