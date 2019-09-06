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
  width: 96%;
  @media(max-width: 1024px) {
    width: 90%;
  }
  @media(max-width: 768px) {
    width: 52%;
    margin-left: 0.5em;
  @media(max-width: 480px) {
    width: 68%;
    margin-left: 0;
`

const ScrollContainer = styled.div`
  height: 6.5em;
  position: relative;
  padding-right: 0.3em;
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
   @media(max-width: 1024px) {
       height: 7.5em;
       padding-right: 0.6em;
   }
   @media(max-width: 768px) {
    height: 8em;
    padding-right: 0.6em;
}
}
`

const FadeOut = styled.div`
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
    @media(max-width: 1024px) {
        height: 2.3em;
      }
`

const TextWrapper = styled.div`
  margin: 0 1em;
  @media(max-width: 768px) {
    width: 80%;
    margin-left: 15%;
    margin-top: 1em;
  }
  @media (max-width: 480px) {
      margin-left:10%;
      width: 90%;
  }
`

const Card = styled.div`  
  width: 10.5em;
  margin-top: 5em;
  margin-left: 2em;
  @media(max-width: 1024px) {
      width: 13em;
      margin-top: -1.75em;
  }
  @media(max-width: 768px) {
    margin-top: -1em;
    margin-left: 15%;
}
@media(max-width: 480px) {
    width: 70%;
    margin-top: -2em;
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
                                <p style={{marginBottom: '2em', marginRight: '0.2em'}}>{data.text}</p>
                            </ScrollContainer>
                            <FadeOut />
                        </div>
                    </FadeIn>
                    <ShortDivider color={data.divider} width='2.5em' />
                    <Body weight={600}>
                        {data.name}
                        <br />
                        {data.job}
                    </Body>
                </TextWrapper>
            </Card>
        </CardWrapper>
    )
}

export default TestimonialCard