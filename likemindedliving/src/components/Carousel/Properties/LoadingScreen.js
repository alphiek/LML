import React from 'react'
import styled from 'styled-components'


export const LoadingScreen = () => {
    return (
        <FullWidthContainer>
            <p>Your content is loading</p>
        </FullWidthContainer>
    )
}

const FullWidthContainer = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`