import React from 'react'
import Fade from 'react-reveal/Fade'


export const FadeIn = ({ children, delay }) => {
    return (
        <Fade up delay={delay}>
            {children}
        </Fade>
    )
}

export const FadeInRight = ({ children, delay }) => {
    return (
        <Fade right delay={delay}>
            {children}
        </Fade>
    )
}

