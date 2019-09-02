import React from 'react'
import styled from 'styled-components'
import { BlobFlex } from '../containers/Containers'
import gradBlob from './gradientBlob.svg'

const Blob = styled.svg`
   fill: ${props => props.color};
   width: 80%;
   position: relative;
   -webkit-transform: ${props => props.rotate};
   transform: ${props => props.rotate};
`

const GradBlobContainer = styled.div`
   width: 15em;
   position: relative;
   margin-top: 4em;
   margin-bottom: 4em;
`

export const BlobOne = ({ color, rotate, children }) => (
   <BlobFlex justifyCenter>
      <Blob
      color={color}
      rotate={rotate}
      viewBox="0 0 666.9 661.4"
      alt='Coloured Background'>
         <path d="M102.4,350.6c-16.7-58-10.5-119.9,19.2-162.1s83.1-64.8,135.8-64.9s104.7,22.4,161.4,44.2
         c56.8,21.7,118.3,42.7,144.5,82c26.1,39.3,17,96.8,2.7,146.3c-14.3,49.7-33.9,91.3-66.8,129.4c-32.9,38-79.4,72.3-131.7,70.2
         c-52.4-2.1-110.6-40.5-159.6-86.7C158.7,462.7,119.1,408.6,102.4,350.6z"/>
      </Blob>
      {children}
    </BlobFlex>
)

export const GradBlob = () => (
   <BlobFlex>
      <GradBlobContainer>
         <img src={gradBlob} alt='Coloured Background'></img>
      </GradBlobContainer>
 </BlobFlex>
)



export const BlobTwo = ({ color }) => (
   <BlobFlex>
      <Blob
      color={color}
      viewBox="0 0 628 421.6"
      alt='Coloured Background'>
         <path d="M505.1,46.9c63.3,29.1,109.2,75.8,117.5,124.3c8.4,48.5-20.8,98.7-68.1,133
	       s-112.7,52.6-181.8,74.4c-69.1,21.9-141.8,47.4-198,37.3c-56.1-10.1-95.8-55.7-124.1-99.2c-28.4-43.6-45.5-85-47.5-132.7
	       c-2-47.6,11.3-101.5,60-134.1C112,17.4,196.2,6.1,278.7,6.1C361.3,6.2,441.9,17.8,505.1,46.9z"/>
      </Blob>
    </BlobFlex>
)
