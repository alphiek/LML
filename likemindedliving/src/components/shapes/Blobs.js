import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gradBlob from './gradientBlob.svg'
import  Zoom from 'react-reveal/Zoom'
import Flex from '../containers/Flex'


const Blob = styled.svg`
   fill: ${props => props.color};
   width: 100%;
   max-width: 300px;
   position: relative;
   -webkit-transform: ${props => props.rotate};
   transform: ${props => props.rotate};
   @media (max-width: 768px) {
      width: 80%;
   }
`

const GradBlobContainer = styled.div`
   width: 22rem;
   height: 100%;
   position: relative;
`

const BlobFlex = styled(Flex)`
  position: relative;
  width: 100%;
  height: 100%;
  @media (max-width: 1180px) {
   justify-content: center;
   align-items: center;
   margin-bottom: 25px;
  }
`

export const BlobOne = ({ color, children }) => (
   <BlobFlex alignCenter justifyCenter>
      {children}
      <Zoom>
      <Blob
      color={color}
      viewBox="0 0 484.7 470.6"
      alt='Coloured Background'>
         <path d="M9.1,226.2C-7.6,168.4-1.4,106.8,28.3,64.7S111.1,0.1,163.5,0s104.3,22.3,160.8,44.1
	      c56.6,21.6,117.8,42.6,143.9,81.7c26,39.1,16.9,96.4,2.7,145.8c-14.2,49.5-33.7,91-66.6,128.9c-32.8,37.9-79.1,72-131.2,70
	      c-52.2-2.1-110.1-40.4-159-86.4C65.3,337.9,25.8,284,9.1,226.2z"/>
      </Blob>
      </Zoom>       
   </BlobFlex>
)

BlobOne.propTypes = {
   color: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired
}

export const BlobThree = ({ color, rotate, children }) => (
   <BlobFlex justifyStart alignCenter>
      {children}
      <Zoom>
      <Blob
      color={color}
      rotate={rotate}
      viewBox="0 0 484.7 470.6"
      alt='Coloured Background'>
         <path d="M9.1,226.2C-7.6,168.4-1.4,106.8,28.3,64.7S111.1,0.1,163.5,0s104.3,22.3,160.8,44.1
	      c56.6,21.6,117.8,42.6,143.9,81.7c26,39.1,16.9,96.4,2.7,145.8c-14.2,49.5-33.7,91-66.6,128.9c-32.8,37.9-79.1,72-131.2,70
	      c-52.2-2.1-110.1-40.4-159-86.4C65.3,337.9,25.8,284,9.1,226.2z"/>
      </Blob>
      </Zoom>       
   </BlobFlex>
)

BlobThree.propTypes = {
   color: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
   rotate: PropTypes.string.isRequired
}


export const GradBlob = ({ children }) => (
   <BlobFlex alignCenter justifyCenter>
      {children}
      <Zoom>
      <GradBlobContainer>
         <img src={gradBlob} alt='Coloured Background'></img>
      </GradBlobContainer>
      </Zoom>
      </BlobFlex>
)

GradBlob.propTypes = {
   children: PropTypes.node.isRequired
}


export const BlobTwo = ({ children, color }) => (
   <BlobFlex justifyStart alignCenter>
      {children}
      <Zoom>
      <Blob
      color={color}
      viewBox="0 0 628 421.6"
      alt='Coloured Background'>
         <path d="M505.1,46.9c63.3,29.1,109.2,75.8,117.5,124.3c8.4,48.5-20.8,98.7-68.1,133
	       s-112.7,52.6-181.8,74.4c-69.1,21.9-141.8,47.4-198,37.3c-56.1-10.1-95.8-55.7-124.1-99.2c-28.4-43.6-45.5-85-47.5-132.7
	       c-2-47.6,11.3-101.5,60-134.1C112,17.4,196.2,6.1,278.7,6.1C361.3,6.2,441.9,17.8,505.1,46.9z"/>
      </Blob>
      </Zoom>
      </BlobFlex>
)

BlobTwo.propTypes = {
   color: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired
}
