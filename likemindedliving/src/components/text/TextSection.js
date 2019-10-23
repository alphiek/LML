import React from 'react'

import { H2, Body } from '../Text/Text'
import { CarouselHeadingWrapper } from '../Containers/Containers'
import { FadeIn } from '../Animations/FadeIn'
import { CarouselLink } from '../Links/CarouselLink'


export const CarouselText = ({ h2, p2, color, link, children }) => {
    return (
        <FadeIn delay={150}>
            <CarouselHeadingWrapper>
                <div>
                <H2 color={color}>{h2}</H2>
                {children}
                {
                  p2 && <Body color={color}>{p2}</Body>
                }
                </div>
                <CarouselLink link={link}/>
            </CarouselHeadingWrapper>
        </FadeIn>
    )
}