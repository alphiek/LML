import React from 'react'
import { ShortDivider } from '../Dividers/Dividers'
import { colors } from '../../global/colors'
import styled from 'styled-components'
import { CardContainer } from './WPCarousel'
import Hover from '../../global/Links/Hover'

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
   text-align: left;
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
   text-align: left;
   margin-bottom: 0.5em;
   width: 100%;
   word-wrap: break-word;
   overflow: hidden;
   white-space: normal;
   & ${CardBody}: last-child {
       margin-bottom: 1em;
   }
`

const Card = ({ data }) => {
    let copy = data[1]

    let content;
    let divider;

    if (copy.place && copy.price) {
        content = <><CardBody>{copy.place}</CardBody>
            <CardBody>{copy.price}</CardBody></>
        divider = <ShortDivider color={colors.mint} width='2em' />
    } else if (copy.blurb) {
        content = <CardBody>{copy.blurb.substring(0, 90)}...</CardBody>
        divider = <ShortDivider color={colors.lilac} width='2em' />
    }

    return (
        <CardContainer>
            <CardImageWrapper>{copy.img}</CardImageWrapper>
            <CardTextContainer>
                <h4>{copy.name}</h4>
                {divider}
                {content}
                <div style={{ marginTop: '10%' }}>
                    <Hover color={colors.lightPeach} margin='20%'>
                        <CardLink href='https://www.rkkcreative.xyz'
                            target='_blank' rel='noopener noreferrer'>{copy.link}</CardLink>
                    </Hover>
                </div>
            </CardTextContainer>
        </CardContainer>
    )
}

export default Card