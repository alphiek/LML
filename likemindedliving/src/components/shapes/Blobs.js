import React from 'react'
import styled from 'styled-components'
import { colors } from '../../global/colors'

const Blob = styled.svg`
   fill: { props => props.color };
   width: 18em;
   position: absolute;
   right: 0;
`

export const BlobOne = () => (
    <Blob
    color={colors.mint}
    viewBox="0 0 666.9 661.4"
    alt='Coloured Background'>
       <path d="M102.4,350.6c-16.7-58-10.5-119.9,19.2-162.1s83.1-64.8,135.8-64.9s104.7,22.4,161.4,44.2
	    c56.8,21.7,118.3,42.7,144.5,82c26.1,39.3,17,96.8,2.7,146.3c-14.3,49.7-33.9,91.3-66.8,129.4c-32.9,38-79.4,72.3-131.7,70.2
	    c-52.4-2.1-110.6-40.5-159.6-86.7C158.7,462.7,119.1,408.6,102.4,350.6z"/>
    </Blob>
)

