import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'
import SlideImages from './SlideImages'
import PageLink from '../../global/Links/PageLink'
import { FadeIn } from '../animations/FadeIn'

const Number = styled(Flex)`
   padding: 1em;
   border: 1px solid red;
   font-size: 0.5em;
   grid-area: number;
   @media (max-width: 1024px) {
     justify-content: flex-start;
   }
`

const Content = styled(Flex)`
   grid-area: content;
   font-size: 0.5em;
   border: 1px solid blue;
   padding: 1em;
   @media (max-width: 1024px) {
    justify-content: center;
  }
`

const LinkWrapper = styled(Flex)`
   margin-right: 3em;
   grid-area: button;
   @media (max-width: 1024px) {
    margin-right: 0;
    justify-content: center;
  }
`


const SlideContainer = ({ copy, link }) => {
    const [currentSlide, updateSlide] = useState(1)
    let content = copy[currentSlide]
    let totalSlides = Object.keys(copy).length

    const updateSlideHandler = val => {
        if (val > 0 && val <= totalSlides) {
            updateSlide(val)
            updateStyle(val)
        } else {
            return
        }
    }

    let style;

    const updateStyle = val => {
        if (val === currentSlide.toString()) {
            style = {
                opacity: '0.5',
                margin: '2em'
            }
        } else {
            style = {
                opacity: '1',
                margin: '2em'
            }
        }
        return style
    }


    let next;

    if (currentSlide.toString() === totalSlides.toString()) {
        next = {
            margin: '2em',
            opacity: '0.5'
        }
    } else {
        next = {
            opacity: '1',
            margin: '2em',
        }
    }


    let previous;

    if (currentSlide.toString() === '1') {
        previous = {
            opacity: '0.5',
            margin: '2em'
        }
    } else {
        previous = {
            opacity: '1',
            margin: '2em',
        }
    }

    let pagination = Object.keys(copy).map(key => <button style={updateStyle(key)} onClick={() => updateSlideHandler(key)}>{key}</button>)


    return (
        <>
            <Number justifyEnd>{currentSlide}</Number>
            <SlideImages slide={currentSlide.toString()} />
            <Content contentCenter>
                {content}
                <div>{pagination}</div>
                <div>
                    <button style={previous} onClick={() => updateSlideHandler(currentSlide - 1)}>Previous</button>
                    <button style={next} onClick={() => updateSlideHandler(currentSlide + 1)}>Next</button>
                </div>
                <LinkWrapper justifyEnd>
                    <FadeIn>
                        <PageLink link={link} />
                    </FadeIn>
                </LinkWrapper>
            </Content>
        </>
    )
}

export default SlideContainer