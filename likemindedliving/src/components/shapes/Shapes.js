import React from 'react'
import styled from 'styled-components'

import { colors } from '../../global/colors'

const Shape1 = styled.svg`
   fill: ${colors.grey};
   opacity: 0.80;
   width: 100%;
   position: absolute;
   top: 0;
   right: 0;
   z-index: -1;
`

export const Grey = () => (
    <Shape1 viewBox="0 0 1024 821.1" alt="grey background shape">
        <path d="M0,161.1L534.5,0H1024v821.1c0,0-69.8-4.3-266.8-42.5S291,799.8,198.8,655.2s-114.7-234-114.7-234L0,161.1z"/>
    </Shape1>
)



const Shape2 = styled.svg`
   fill: ${colors.mint};
   position: relative;
   top: 0;
   right: 0;
   z-index: -1;
`

export const Mint = () => (
    <Shape2
      viewBox="0 0 835.2 491.9"
      alt='Green background for Landlord Page link'>
        <g  transform="translate(-279.027 -719)">
        <path d="M350.5,791.8c-26-15-46-25-71-35c-13.7-53.5,253-45.9,417.9-3.7C889,802,1049.7,895,1102,991
            s-73.7,104.5-195.3,146s-414.6,107-334.9,49s27.7-164.7-51.8-248S401.5,821.8,350.5,791.8z"/>
       </g>
    </Shape2>


)


const Shape3 = styled.svg`
fill: ${colors.dustyBlue};
position: relative;
top: 0;
right: 0;
z-index: -1;
`

export const DustyBlue = () => (
    <Shape3
     viewBox="0 0 676 602.4"
     alt='Dusky blue background for London Flatshare matching quiz'>
         <path d="M0,42.1c0,0,114.5-67,244-32s274,172,274,172l158,186c0,0-66,75.5-192,134s-191,94-312,100
	      s-172-76-172-76V42.1z"/>
    </Shape3>
)





