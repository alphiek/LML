import React from 'react'
import styled from 'styled-components'

const SquiggleSvg = styled.svg`
  stroke: ${props => props.color};
  stroke-width: 6;
  stroke-linecap:round;
  stroke-miterlimit:10;
  width: ${props => props.width};
  height: 1em;
  fill: none;
`
const SquiggleSmall = styled(SquiggleSvg)`
  stroke-width: 3;
  height: 1em;
`


export const Squiggle = ({ width, color }) => {
  return (
    <SquiggleSvg
      width={width}
      color={color}
      viewBox="0 0 987 8.9"
      alt='Text Divider'>
      <path d="M3,3c98.1,0,98.1,2.9,196.2,2.9S297.3,3,395.4,3s98.1,2.9,196.2,2.9S689.7,3,787.8,3 S885.9,5.9,984,5.9" />
    </SquiggleSvg>
  )
}

export const ShortSquiggle = ({ width, color }) => {
  return (
    <SquiggleSmall
      width={width}
      color={color}
      viewBox="0 0 90 6.9"
      alt='Text Divider'>
      <path d="M1.5,1.5c8.7,0,8.7,3.9,17.4,3.9s8.7-3.9,17.4-3.9S45,5.4,53.7,5.4s8.7-3.9,17.4-3.9 s8.7,3.9,17.4,3.9" />
    </SquiggleSmall>
  )
}
