import React from 'react'
import { ImageCell, ImageDiv } from './slideStyles'

const ImageWrapper = ({ children }) => {
    return (
        <ImageCell justifyCenter contentCenter>
            <ImageDiv justifyCenter contentCenter>
                {children}
            </ImageDiv>
        </ImageCell>
    )
}

export default ImageWrapper