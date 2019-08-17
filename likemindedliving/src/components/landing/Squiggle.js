import React from 'react'
import styled from 'styled-components'
import { colors } from '../../global/colors'

const SquiggleSvg = styled.svg`
  stroke: ${colors.lilac};
  stroke-width: 6;
  stroke-linecap:round;
  stroke-miterlimit:10;
  width: { props => props.width };
`
const Squiggle = ({ width }) => {
    return (
       <SquiggleSvg 
        width={width}
        viewBox="0 0 987 8.9" 
        alt='Text Divider'>
        <path d="M3,3c98.1,0,98.1,2.9,196.2,2.9S297.3,3,395.4,3s98.1,2.9,196.2,2.9S689.7,3,787.8,3 S885.9,5.9,984,5.9"/>
       </SquiggleSvg>
    )
}

export default Squiggle