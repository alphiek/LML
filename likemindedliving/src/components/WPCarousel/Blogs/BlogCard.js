import React from 'react'
import styled from 'styled-components'
import { ShortDivider } from '../../Dividers/Dividers'
import { colors } from '../../../global/colors'

export const CardContainer = styled.div`
   border-radius: 0.5em;
   width: 12em;
   height: 13.5em;
   position: relative;
   overflow: hidden;
   margin: 0.2em;
   text-align: left;
   transition: all .2s ease-in-out;
   box-shadow: 0 10px 18px -3px rgba(75, 74, 104, 0.25), 0 4px 6px -2px rgba(75, 74, 104, 0.05);
   :hover {
    box-shadow: 0 25px 25px -15px rgba(75, 74, 104, 0.45);
    transform: scale(1.02);
    transform: translate(0, -0.1em);
    @media (max-width: 768px) {
    box-shadow: 0 10px 18px -3px rgba(75, 74, 104, 0.25), 0 4px 6px -2px rgba(75, 74, 104, 0.05);
    transform: none;
    }
  }
    @media(max-width: 1024px) {
      height: 14em;
    }
    @media(max-width: 768px) {
      height: 15em;
      transition: none;
    }
    @media(max-width: 480px) {
      height: 16em;
      transition: none;
    }

  }
`

const CardLink = styled.a`
  font-size: 0.45em;
  width: auto;
  text-transform: uppercase;
  opacity: 0.6;
  font-weight: 700;
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
   width: 100%;
   margin-bottom: 2em;
   font-size: 0.48em;
   font-family: Montserrat, Arial, Helvetica, sans-serif;
   text-align: left;
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
   width: 100%;
   overflow: hidden;
   background: #4B4A68;
   border-radius: 0.5em 0.5em 0 0;
`

const Image = styled.img`
   width: 100%;
   opacity: 0.8;
`

const CardTextContainer = styled.div`
   display: grid;
   padding: 0.75em;
   margin-bottom: 0.5em;
   width: 100%;
   word-wrap: break-word;
   overflow: hidden;
   white-space: normal;
   & ${CardBody}: last-child {
       margin-bottom: 1em;
   }
`

const AbsLink = styled.div`
   position: absolute;
   bottom: 5%;
`

const BlogCard = ({ data }) => {

    let imageData = data.featuredImage;
    let imageUrl;

    for (let item in imageData ) {
      if (item === 'sourceUrl') {
        imageUrl = imageData[item]
      } 
    }

    return (
        <CardContainer>
            <CardImageWrapper><Image src={imageUrl} /></CardImageWrapper>
            <CardTextContainer>
                <h4>{data.title}</h4>
                <ShortDivider color={colors.lilac} width='2em' />
                <CardBody>{data.excerpt.substring(0, 90)}...</CardBody>
                <AbsLink>
                        <CardLink 
                            href={`https://www.likemindedliving.co.uk/blog/${data.slug}`}
                            target='_blank' rel='noopener noreferrer'>Read More</CardLink>
                </AbsLink>
            </CardTextContainer>
        </CardContainer>
    )
}

export default BlogCard
