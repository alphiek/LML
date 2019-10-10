import React from 'react'
import styled from 'styled-components'
import { TestimonialOne } from '../../images/queries/TestimonialOne'
import { TestimonialTwo } from '../../images/queries/TestimonialTwo'
import { Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import { CardWrapper } from './Testimonial'
import Img from 'gatsby-image'
import { FadeIn } from '../animations/FadeIn'

export const TestimonialImageWrapper = styled(Img)`
  width: 65%;
  @media(max-width: 1180px) {
    width: 9em;
    margin: 0 auto;
  }
  @media(max-width: 768px) {
    width: 8.8em;
`

const ScrollContainer = styled.div`
  height: 6.5em;
  position: relative;
  margin-right: 1.5em;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: y proximity;
  scroll-snap-align: start;
  &::-webkit-scrollbar {
    width: 0.2em;
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #C9D2F5;
    border-radius: 8px;
  }
  &::-moz-scrollbar-button:decrement {
      width: 0px;
  }
  &::-moz-scrollbar-button:increment {
      width: 0px;
  }
  &::-webkit-scrollbar-button:decrement {
    width: 0px;
  }
  &::-webkit-scrollbar-button:increment {
    width: 0px;
  }
   scrollbar-color: #C9D2F5 white;
   @media(max-width: 1180px) {
       width: 60%;
       height: auto;
       margin: 0 auto;
   }
   @media(max-width: 480px)
   {
     width: 80%;
   }
`

const FadeOut = styled.div`
   display: none;
   position: absolute; 
   height: 1.8em;
   width: 100%;
   bottom: 0;
   left: 0;
   z-index: 1;
   background: -webkit-linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    ); 
    @media(max-width: 1180px) {
        display: none;
      }
`

const TextWrapper = styled.div`
  margin-left: 0.5em;
  @media (max-width: 1180px) {
    margin-left: 0;
  }
`

const Card = styled.div`  
  width: 100%;
  margin-top: -3.5em;
  padding: 0 2em;
  @media(max-width: 1180px) {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: -1.75em;
  }
`
const TestimonialText = styled.p`
  margin: 1em 1em 1em 0em;
  @media (max-width: 1180px)
  {
    margin: 1em 0;
  }
`
const TestimonialCard = ({ copy }) => {
    let data = copy[1]
    let number = copy[0]

    let img;

    if (number === 'one') {
        img = <TestimonialOne />
    } else if (number === 'two') {
        img = <TestimonialTwo />
    } else {
        img = <p>There is a problem here</p>
    }

    return (
        <CardWrapper>
            <Card>
                <FadeIn>
                    {img}
                </FadeIn>
                <TextWrapper>
                    <FadeIn>
                        <div style={{ position: 'relative' }}>
                            <ScrollContainer>
                                <TestimonialText>{data.text}</TestimonialText>
                            </ScrollContainer>
                            <FadeOut />
                        </div>
                    </FadeIn>
                    <ShortDivider color={data.divider} top='1em' width='2.5em' bottom='0.2rem'/>
                    <Body weight={600}>
                        {data.name}
                    </Body>
                </TextWrapper>
            </Card>
        </CardWrapper>
    )
}

export default TestimonialCard