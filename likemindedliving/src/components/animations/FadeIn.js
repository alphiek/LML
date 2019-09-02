import React from 'react'
import Fade from 'react-reveal/Fade'


export const FadeIn = ({children}) => (
    <Fade> 
        {children}
    </Fade>
)