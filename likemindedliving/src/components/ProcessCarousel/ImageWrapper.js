import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'


export const ImageDiv = styled(Flex)`
  width: 100%;
  height: auto;
`


const ImageWrapper = ({ children }) => {
    return (
            <ImageDiv justifyCenter contentCenter>
                {children}
            </ImageDiv>
    )
}

export default ImageWrapper