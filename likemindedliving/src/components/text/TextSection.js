import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Flex from '../containers/Flex'
import { H2, H3, Body } from '../text/Text'
import { CarouselHeadingWrapper } from '../containers/Containers'
import { ShortDivider } from '../Dividers/Dividers'
import { FadeIn } from '../animations/FadeIn'
import { CarouselLink } from '../../global/Links/CarouselLink'


const TextContainer = styled(Flex)`
   height: 100%;
   @media (max-width: 1180px) {
       width: 100%;
       align-items: center;
       margin: 1rem 0;
       padding: 0;
   }
`

export const TextSection = ({ copy, children }) => {
    let h2;
    let h3;
    let p2;

    if (copy.h2) {
        h2 = <H2 color={copy.color}>{copy.h2}</H2>
    } else if (copy.h3) {
        h3 = <H3>{copy.h3}</H3>
    } else if (copy.p2) {
        p2 = <Body>{copy.p2}</Body>
    }

    return (
        <TextContainer column justifyCenter contentCenter>
            {h2}
            {h3}
            {
                copy.divider && <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
            }
            <Body color={copy.color}>{copy.p1}</Body>
            {
                copy.p2 && <Body color={copy.color}>{copy.p2}</Body>
            }
            {p2}
            {children}
        </TextContainer>
    )
}

TextSection.propTypes = {
  children: PropTypes.node,
  copy: PropTypes.shape({
     bgColor: PropTypes.string.isRequired,
     blob: PropTypes.string,
     color: PropTypes.string.isRequired,
     divider: PropTypes.string.isRequired,
     h2: PropTypes.string.isRequired,
     link: PropTypes.objectOf(PropTypes.string),
     p1: PropTypes.string.isRequired
  }).isRequired
}


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