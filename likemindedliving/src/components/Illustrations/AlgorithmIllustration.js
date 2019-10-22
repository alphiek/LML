import React from 'react'
import styled from 'styled-components'
import { GradBlob } from '../shapes/Blobs'
import algorithm from '../../images/algorithm.svg'

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


const AlgorithmIllustration = () => (
    <GradBlob>   
    <ImageWrapper src={algorithm} alt='Illustration of a computer with houses' />
    </GradBlob>
)


export default AlgorithmIllustration