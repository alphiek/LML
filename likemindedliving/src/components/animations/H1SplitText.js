import React from 'react'
import SplitText from 'react-pose-text'
import styled from 'styled-components'

const H1 = styled.h1`
   color: ${props => props.color};
`

const H1SplitText = ({ h1, color }) => {

    const charPoses = {
        exit: { opacity: 0, y: -60 },
        enter: {
          opacity: 1,
          y: 0,
          delay: ({ charIndex }) => charIndex * 20
        }
      };

    return (
      <H1 style={{marginTop: '0'}} color={color}>
          <SplitText 
            initialPose="exit" 
            pose="enter" 
            charPoses={charPoses}
            >{h1}</SplitText>
      </H1>
    )
}

export default H1SplitText