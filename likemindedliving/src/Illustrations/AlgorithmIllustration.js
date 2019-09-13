import React from 'react'
import { GradBlob } from '../components/shapes/Blobs'
import { ImageWrapper } from './Styles'
import algorithm from '../images/Algorithm.svg'


const AlgorithmIllustration = () => (
    <GradBlob>   
    <ImageWrapper src={algorithm} alt='Illustration of a computer with houses' />
    </GradBlob>
)


export default AlgorithmIllustration