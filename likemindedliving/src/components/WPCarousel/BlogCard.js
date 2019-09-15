import React from 'react'
import styled from 'styled-components'

import { ShortDivider } from '../Dividers/Dividers'
import { colors } from '../../global/colors'
import Hover from '../../global/Links/Hover'

export const CardContainer = styled.div`
   border-radius: 0.5em;
   width: 8.5em;
   height: 100%;
   overflow: hidden;
   margin: 0.2em;
   transition: all .2s ease-in-out;
   box-shadow: 0 10px 18px -3px rgba(75, 74, 104, 0.25), 0 4px 6px -2px rgba(75, 74, 104, 0.05);
   &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    -webkit-appearance: none;
   }
    scrollbar-width: none;
   :hover {
    box-shadow: 0 25px 25px -15px rgba(75, 74, 104, 0.45);
    transform: scale(1.02);
    transform: translate(0, -0.1em);
    @media (max-width: 768px) {
    box-shadow: 0 10px 18px -3px rgba(75, 74, 104, 0.25), 0 4px 6px -2px rgba(75, 74, 104, 0.05);
    transform: none;
    }
  }
    @media(max-width: 768px) {
      transition: none;
    }
  }
`

const CardLink = styled.a`
  padding-top: 3em;
  font-size: 0.45em;
  width: auto;
  @media (max-width: 1024px) {
    font-size: 0.5em;
  }
  @media (max-width: 768px) {
    font-size: 0.55em;
  }
  @media (max-width: 480px) {
    font-size: 0.6em;
  }
   
`
const CardBody = styled.p`
   margin-top: 0;
   width: 80%;
   margin-bottom: 0.3em;
   font-size: 0.48em;
   font-family: Montserrat, Arial, Helvetica, sans-serif;
   letter-spacing: 0.2px;
   @media (max-width: 1024px) {
    font-size: 0.52em;
  }
  @media (max-width: 768px) {
    font-size: 0.58em;
  }
  @media (max-width: 480px) {
    font-size: 0.6em;
  }
`
const CardImageWrapper = styled.div`
   height: 5em;
   background: #4B4A68;
   border-radius: 0.5em 0.5em 0 0;
`

const CardTextContainer = styled.div`
   display: grid;
   padding: 0.75em 0 0 0.75em;
   margin-bottom: 0.5em;
   width: 100%;
   word-wrap: break-word;
   overflow: hidden;
   white-space: normal;
   & ${CardBody}: last-child {
       margin-bottom: 1em;
   }
`

const BlogCard = ({ data }) => {

    return (
        <CardContainer>
            <CardImageWrapper>This is the image</CardImageWrapper>
            <CardTextContainer>
                <h4>{data.title}</h4>
                <ShortDivider color={colors.lilac} width='2em' />
                <CardBody>{data.excerpt.substring(0, 90)}...</CardBody>
                <div style={{ marginTop: '10%' }}>
                    <Hover color={colors.lightPeach} margin='20%'>
                        <CardLink href='https://www.likemindedliving.co.uk/blogs/${data.slug)'
                            target='_blank' rel='noopener noreferrer'>Read More</CardLink>
                    </Hover>
                </div>
            </CardTextContainer>
        </CardContainer>
    )
}

export default BlogCard
